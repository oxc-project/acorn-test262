__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 195,
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
      "start": 82,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 105,
            "decorators": [],
            "name": "PropertyAccessors",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 193,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 122,
                "end": 192,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 128,
                  "end": 192,
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "start": 132,
                      "end": 190,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 142,
                        "end": 190,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 148,
                            "end": 186,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 158,
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
                              "start": 158,
                              "end": 186,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 161,
                                "end": 186,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 163,
                                    "end": 184,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 163,
                                      "end": 183,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 163,
                                        "end": 181,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 163,
                                          "end": 177,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 163,
                                            "end": 167
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 168,
                                            "end": 177,
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 178,
                                          "end": 181,
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
                        "start": 138,
                        "end": 141,
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
              "start": 108,
              "end": 121,
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
