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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
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
              "start": 17,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 27
          }
        ],
        "start": 11,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
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
        "start": 38,
        "end": 45
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
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
              "start": 65,
              "end": 76
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 95
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 104,
                              "end": 109
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 104,
                            "end": 111
                          },
                          "id": null,
                          "generator": false,
                          "start": 98,
                          "end": 111
                        },
                        "definite": false,
                        "start": 93,
                        "end": 111
                      }
                    ],
                    "declare": false,
                    "start": 89,
                    "end": 112
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
                          "name": "r3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 127
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Super",
                                    "start": 138,
                                    "end": 143
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 138,
                                  "end": 145
                                },
                                "directive": null,
                                "start": 138,
                                "end": 146
                              }
                            ],
                            "start": 136,
                            "end": 148
                          },
                          "id": null,
                          "generator": false,
                          "start": 130,
                          "end": 148
                        },
                        "definite": false,
                        "start": 125,
                        "end": 148
                      }
                    ],
                    "declare": false,
                    "start": 121,
                    "end": 148
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
                          "name": "r4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 161,
                          "end": 163
                        },
                        "init": {
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
                                    "start": 180,
                                    "end": 185
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 180,
                                  "end": 187
                                },
                                "directive": null,
                                "start": 180,
                                "end": 188
                              }
                            ],
                            "start": 178,
                            "end": 190
                          },
                          "expression": false,
                          "start": 166,
                          "end": 190
                        },
                        "definite": false,
                        "start": 161,
                        "end": 190
                      }
                    ],
                    "declare": false,
                    "start": 157,
                    "end": 190
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
                          "name": "r5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 205
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 229
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
                                          "start": 250,
                                          "end": 255
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 250,
                                        "end": 257
                                      },
                                      "directive": null,
                                      "start": 250,
                                      "end": 258
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1",
                                        "start": 282,
                                        "end": 283
                                      },
                                      "start": 275,
                                      "end": 284
                                    }
                                  ],
                                  "start": 232,
                                  "end": 298
                                },
                                "expression": false,
                                "start": 229,
                                "end": 298
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 222,
                              "end": 298
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 319
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
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 323,
                                        "end": 329
                                      },
                                      "start": 321,
                                      "end": 329
                                    },
                                    "start": 320,
                                    "end": 329
                                  }
                                ],
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
                                          "start": 349,
                                          "end": 354
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 349,
                                        "end": 356
                                      },
                                      "directive": null,
                                      "start": 349,
                                      "end": 357
                                    }
                                  ],
                                  "start": 331,
                                  "end": 371
                                },
                                "expression": false,
                                "start": 319,
                                "end": 371
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 312,
                              "end": 371
                            }
                          ],
                          "start": 208,
                          "end": 381
                        },
                        "definite": false,
                        "start": 203,
                        "end": 381
                      }
                    ],
                    "declare": false,
                    "start": 199,
                    "end": 381
                  }
                ],
                "start": 79,
                "end": 387
              },
              "expression": false,
              "start": 76,
              "end": 387
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 387
          }
        ],
        "start": 59,
        "end": 389
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 389
}
```
