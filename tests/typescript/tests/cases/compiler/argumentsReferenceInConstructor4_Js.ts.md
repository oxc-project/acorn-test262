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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 81
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
                    "start": 82,
                    "end": 85
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 88,
                    "end": 90
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 90
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
                          "start": 102,
                          "end": 105
                        },
                        "init": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 108,
                          "end": 113
                        },
                        "definite": false,
                        "start": 102,
                        "end": 113
                      }
                    ],
                    "declare": false,
                    "start": 96,
                    "end": 114
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
                          "start": 148,
                          "end": 152
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 153,
                          "end": 156
                        },
                        "optional": false,
                        "computed": false,
                        "start": 148,
                        "end": 156
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 162
                      },
                      "start": 148,
                      "end": 162
                    },
                    "directive": null,
                    "start": 148,
                    "end": 163
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
                          "start": 203,
                          "end": 212
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 220,
                            "end": 229
                          },
                          "optional": false,
                          "computed": false,
                          "start": 215,
                          "end": 229
                        },
                        "definite": false,
                        "start": 203,
                        "end": 229
                      }
                    ],
                    "declare": false,
                    "start": 197,
                    "end": 230
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
                          "start": 264,
                          "end": 268
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 272
                        },
                        "optional": false,
                        "computed": false,
                        "start": 264,
                        "end": 272
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 284
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 288
                        },
                        "optional": false,
                        "computed": false,
                        "start": 275,
                        "end": 288
                      },
                      "start": 264,
                      "end": 288
                    },
                    "directive": null,
                    "start": 264,
                    "end": 289
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
                          "start": 323,
                          "end": 327
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 328,
                          "end": 331
                        },
                        "optional": false,
                        "computed": false,
                        "start": 323,
                        "end": 331
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 343
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 347
                        },
                        "optional": false,
                        "computed": true,
                        "start": 334,
                        "end": 348
                      },
                      "start": 323,
                      "end": 348
                    },
                    "directive": null,
                    "start": 323,
                    "end": 349
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
                          "start": 383,
                          "end": 387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 395
                        },
                        "optional": false,
                        "computed": false,
                        "start": 383,
                        "end": 395
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 398,
                        "end": 407
                      },
                      "start": 383,
                      "end": 407
                    },
                    "directive": null,
                    "start": 383,
                    "end": 408
                  }
                ],
                "start": 92,
                "end": 411
              },
              "expression": false,
              "start": 81,
              "end": 411
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 411
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
              "start": 418,
              "end": 427
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
                            "start": 443,
                            "end": 446
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 448,
                            "end": 450
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 443,
                          "end": 450
                        }
                      ],
                      "start": 441,
                      "end": 452
                    },
                    "start": 434,
                    "end": 453
                  }
                ],
                "start": 430,
                "end": 456
              },
              "expression": false,
              "start": 427,
              "end": 456
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 414,
            "end": 456
          }
        ],
        "start": 8,
        "end": 458
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 458
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 458
}
```
