__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "_super",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 103,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 103,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 103,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 69,
                    "end": 85,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 84,
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 82,
                          "end": 84,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 217,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 215,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 143,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 215,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 215,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 164,
                    "expression": {
                      "type": "CallExpression",
                      "start": 156,
                      "end": 163,
                      "callee": {
                        "type": "Super",
                        "start": 156,
                        "end": 161
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 173,
                    "end": 189,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 188,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 183,
                          "name": "_super",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 186,
                          "end": 188,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 218,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 234,
        "end": 237,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 366,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 364,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 255,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 364,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 364,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 276,
                    "expression": {
                      "type": "CallExpression",
                      "start": 268,
                      "end": 275,
                      "callee": {
                        "type": "Super",
                        "start": 268,
                        "end": 273
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 285,
                    "end": 358,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 289,
                        "end": 358,
                        "id": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 290,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 293,
                          "end": 358,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 299,
                            "end": 358,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 313,
                                "end": 329,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 317,
                                    "end": 328,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 317,
                                      "end": 323,
                                      "name": "_super",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 326,
                                      "end": 328,
                                      "value": 10,
                                      "raw": "10"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
