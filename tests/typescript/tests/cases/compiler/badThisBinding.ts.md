__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 26,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 32,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 29,
          "end": 32
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 67,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 60,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 60,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 66,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 63,
          "end": 66
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 188,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 100,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 185,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 107,
                      "end": 184,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 111,
                          "end": 183,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 117,
                            "end": 183,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 131,
                                "end": 179,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 131,
                                  "end": 178,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 135,
                                      "end": 177,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 141,
                                        "end": 177,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 159,
                                            "end": 172,
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 163,
                                                "end": 171,
                                                "definite": false,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 163,
                                                  "end": 164,
                                                  "decorators": [],
                                                  "name": "x",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "start": 167,
                                                  "end": 171
                                                }
                                              }
                                            ],
                                            "declare": false,
                                            "kind": "var"
                                          }
                                        ]
                                      },
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 134,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 110,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
