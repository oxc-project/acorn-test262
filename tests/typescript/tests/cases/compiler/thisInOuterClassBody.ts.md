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
        "start": 6,
        "end": 9
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
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 26
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 43,
              "end": 47
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 32,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 57
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 72,
                        "end": 76
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "optional": false,
                      "computed": false,
                      "start": 72,
                      "end": 78
                    },
                    "directive": null,
                    "start": 72,
                    "end": 79
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
                          "start": 118,
                          "end": 119
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 128,
                              "end": 132
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 133,
                              "end": 134
                            },
                            "optional": false,
                            "computed": false,
                            "start": 128,
                            "end": 134
                          },
                          "id": null,
                          "generator": false,
                          "start": 122,
                          "end": 134
                        },
                        "definite": false,
                        "start": 118,
                        "end": 134
                      }
                    ],
                    "declare": false,
                    "start": 114,
                    "end": 135
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 188
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 191,
                            "end": 195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 197
                          },
                          "optional": false,
                          "computed": false,
                          "start": 191,
                          "end": 197
                        },
                        "definite": false,
                        "start": 187,
                        "end": 197
                      }
                    ],
                    "declare": false,
                    "start": 183,
                    "end": 198
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 214,
                      "end": 218
                    },
                    "start": 207,
                    "end": 219
                  }
                ],
                "start": 60,
                "end": 225
              },
              "expression": false,
              "start": 57,
              "end": 225
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 225
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 259,
                          "end": 260
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 269
                          },
                          "optional": false,
                          "computed": false,
                          "start": 263,
                          "end": 269
                        },
                        "definite": false,
                        "start": 259,
                        "end": 269
                      }
                    ],
                    "declare": false,
                    "start": 255,
                    "end": 270
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 287,
                            "end": 291
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 292,
                            "end": 293
                          },
                          "optional": false,
                          "computed": false,
                          "start": 287,
                          "end": 293
                        },
                        "definite": false,
                        "start": 283,
                        "end": 293
                      }
                    ],
                    "declare": false,
                    "start": 279,
                    "end": 294
                  }
                ],
                "start": 245,
                "end": 300
              },
              "expression": false,
              "start": 242,
              "end": 300
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 231,
            "end": 300
          }
        ],
        "start": 10,
        "end": 302
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
