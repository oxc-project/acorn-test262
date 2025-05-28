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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 105,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 103,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 103,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 69,
                    "end": 85,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 84,
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null
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
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 217,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 217,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 215,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 143,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 215,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 173,
                    "end": 189,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 188,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 183,
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null
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
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 218,
      "end": 366,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 234,
        "end": 237,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 366,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 364,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 255,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 364,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 285,
                    "end": 358,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 289,
                        "end": 358,
                        "id": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 290,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 293,
                          "end": 358,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 299,
                            "end": 358,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 313,
                                "end": 329,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 317,
                                    "end": 328,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 317,
                                      "end": 323,
                                      "decorators": [],
                                      "name": "_super",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                "declare": false
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
