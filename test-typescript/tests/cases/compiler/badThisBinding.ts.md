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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 26,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 26,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 27,
        "end": 32,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 29,
          "end": 32
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 60,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 60,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 66,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 63,
          "end": 66
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 82,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 191,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 188,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 100,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 111,
                          "end": 183,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                    "name": "bar",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 135,
                                      "end": 177,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
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
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 163,
                                                  "end": 164,
                                                  "name": "x",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "start": 167,
                                                  "end": 171
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
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
