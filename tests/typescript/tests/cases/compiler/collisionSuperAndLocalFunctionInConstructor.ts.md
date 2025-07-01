__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_super",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 18,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
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
              "start": 50,
              "end": 61
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 89
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 92,
                      "end": 115
                    },
                    "expression": false,
                    "start": 74,
                    "end": 115
                  }
                ],
                "start": 64,
                "end": 121
              },
              "expression": false,
              "start": 61,
              "end": 121
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 50,
            "end": 121
          }
        ],
        "start": 44,
        "end": 123
      },
      "abstract": false,
      "declare": false,
      "start": 34,
      "end": 123
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 131
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 143
      },
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
              "start": 150,
              "end": 161
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
                        "type": "Super",
                        "start": 174,
                        "end": 179
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 174,
                      "end": 181
                    },
                    "directive": null,
                    "start": 174,
                    "end": 182
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 206
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 209,
                      "end": 239
                    },
                    "expression": false,
                    "start": 191,
                    "end": 239
                  }
                ],
                "start": 164,
                "end": 245
              },
              "expression": false,
              "start": 161,
              "end": 245
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 150,
            "end": 245
          }
        ],
        "start": 144,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 124,
      "end": 247
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 255
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 267
      },
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
              "start": 274,
              "end": 285
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
                        "type": "Super",
                        "start": 298,
                        "end": 303
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 298,
                      "end": 305
                    },
                    "directive": null,
                    "start": 298,
                    "end": 306
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 320
                        },
                        "init": {
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
                                "type": "FunctionDeclaration",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_super",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 352,
                                  "end": 358
                                },
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 361,
                                  "end": 395
                                },
                                "expression": false,
                                "start": 343,
                                "end": 395
                              }
                            ],
                            "start": 329,
                            "end": 405
                          },
                          "id": null,
                          "generator": false,
                          "start": 323,
                          "end": 405
                        },
                        "definite": false,
                        "start": 319,
                        "end": 405
                      }
                    ],
                    "declare": false,
                    "start": 315,
                    "end": 405
                  }
                ],
                "start": 288,
                "end": 411
              },
              "expression": false,
              "start": 285,
              "end": 411
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 274,
            "end": 411
          }
        ],
        "start": 268,
        "end": 413
      },
      "abstract": false,
      "declare": false,
      "start": 248,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 413
}
```
