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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 191,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 188,
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
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 185,
                    "expression": {
                      "type": "CallExpression",
                      "start": 107,
                      "end": 184,
                      "callee": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 110,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 111,
                          "end": 183,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 117,
                            "end": 183,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 131,
                                "end": 179,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 131,
                                  "end": 178,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 134,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 135,
                                      "end": 177,
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 141,
                                        "end": 177,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 159,
                                            "end": 172,
                                            "kind": "var",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 163,
                                                "end": 171,
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
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
