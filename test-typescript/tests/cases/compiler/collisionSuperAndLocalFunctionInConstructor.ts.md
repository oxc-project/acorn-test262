__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 413,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "_super",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 33,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 121,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 74,
                    "end": 115,
                    "id": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 89,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 92,
                      "end": 115,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
      "start": 124,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 161,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 245,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 245,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 174,
                    "end": 182,
                    "expression": {
                      "type": "CallExpression",
                      "start": 174,
                      "end": 181,
                      "callee": {
                        "type": "Super",
                        "start": 174,
                        "end": 179
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 191,
                    "end": 239,
                    "id": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 206,
                      "name": "_super",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 209,
                      "end": 239,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
      "start": 248,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 264,
        "end": 267,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 268,
        "end": 413,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 411,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 285,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 285,
              "end": 411,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 411,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 306,
                    "expression": {
                      "type": "CallExpression",
                      "start": 298,
                      "end": 305,
                      "callee": {
                        "type": "Super",
                        "start": 298,
                        "end": 303
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 315,
                    "end": 405,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 319,
                        "end": 405,
                        "id": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 323,
                          "end": 405,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 329,
                            "end": 405,
                            "body": [
                              {
                                "type": "FunctionDeclaration",
                                "start": 343,
                                "end": 395,
                                "id": {
                                  "type": "Identifier",
                                  "start": 352,
                                  "end": 358,
                                  "name": "_super",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 361,
                                  "end": 395,
                                  "body": []
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
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
