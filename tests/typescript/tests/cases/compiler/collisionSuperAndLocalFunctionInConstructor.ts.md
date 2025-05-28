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
        "decorators": [],
        "name": "_super",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 33,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 123,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
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
        "start": 44,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 121,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 121,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 92,
                      "end": 115,
                      "body": []
                    },
                    "expression": false
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
      "start": 124,
      "end": 247,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 143,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 150,
            "end": 245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 161,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 245,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                      "decorators": [],
                      "name": "_super",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 209,
                      "end": 239,
                      "body": []
                    },
                    "expression": false
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
      "start": 248,
      "end": 413,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 264,
        "end": 267,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 268,
        "end": 413,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 411,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 285,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 285,
              "end": 411,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 315,
                    "end": 405,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 319,
                        "end": 405,
                        "id": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 323,
                          "end": 405,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "decorators": [],
                                  "name": "_super",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 361,
                                  "end": 395,
                                  "body": []
                                },
                                "expression": false
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
