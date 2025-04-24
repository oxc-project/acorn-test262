__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 197,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 38,
            "decorators": [],
            "name": "dedupingMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 41,
            "end": 59,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 59,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 107,
            "decorators": [],
            "name": "PropertyAccessors",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 110,
            "end": 195,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 124,
                "end": 194,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 130,
                  "end": 194,
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "start": 134,
                      "end": 192,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 144,
                        "end": 192,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 150,
                            "end": 188,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 157,
                              "end": 160,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": true,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 160,
                              "end": 188,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 163,
                                "end": 188,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 165,
                                    "end": 186,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 165,
                                      "end": 185,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 165,
                                        "end": 183,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 165,
                                          "end": 179,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 165,
                                            "end": 169
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 170,
                                            "end": 179,
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 180,
                                          "end": 183,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
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
                        "start": 140,
                        "end": 143,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
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
              "start": 110,
              "end": 123,
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
