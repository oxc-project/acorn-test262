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
        "name": "Based",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 12,
        "end": 15
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Based",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 43
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 50,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 83
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
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "ThisExpression",
                              "start": 117,
                              "end": 121
                            },
                            "directive": null,
                            "start": 117,
                            "end": 122
                          }
                        ],
                        "start": 103,
                        "end": 145
                      },
                      "id": null,
                      "generator": false,
                      "start": 97,
                      "end": 145
                    },
                    "directive": null,
                    "start": 96,
                    "end": 147
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "ThisExpression",
                              "start": 176,
                              "end": 180
                            },
                            "directive": null,
                            "start": 176,
                            "end": 181
                          }
                        ],
                        "start": 162,
                        "end": 204
                      },
                      "id": null,
                      "generator": false,
                      "start": 156,
                      "end": 204
                    },
                    "directive": null,
                    "start": 156,
                    "end": 205
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "ThisExpression",
                                "start": 235,
                                "end": 239
                              },
                              "directive": null,
                              "start": 235,
                              "end": 240
                            }
                          ],
                          "start": 221,
                          "end": 263
                        },
                        "id": null,
                        "generator": false,
                        "start": 215,
                        "end": 263
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 214,
                      "end": 266
                    },
                    "directive": null,
                    "start": 214,
                    "end": 267
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 276,
                        "end": 281
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 276,
                      "end": 283
                    },
                    "directive": null,
                    "start": 276,
                    "end": 284
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 293,
                        "end": 298
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 293,
                      "end": 300
                    },
                    "directive": null,
                    "start": 293,
                    "end": 301
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
                          "start": 310,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 316
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 319,
                        "end": 321
                      },
                      "start": 310,
                      "end": 321
                    },
                    "directive": null,
                    "start": 310,
                    "end": 322
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
                          "name": "that",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 339
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 342,
                          "end": 346
                        },
                        "definite": false,
                        "start": 335,
                        "end": 346
                      }
                    ],
                    "declare": false,
                    "start": 331,
                    "end": 347
                  }
                ],
                "start": 86,
                "end": 353
              },
              "expression": false,
              "start": 83,
              "end": 353
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 353
          }
        ],
        "start": 44,
        "end": 355
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 355
}
```
