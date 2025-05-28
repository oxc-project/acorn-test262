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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 59,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 59,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 194,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 193,
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
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 121,
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 122,
                "end": 192,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 128,
                  "end": 192,
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "start": 132,
                      "end": 190,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 142,
                        "end": 190,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 148,
                            "end": 186,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 158,
                              "end": 186,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 161,
                                "end": 186,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 163,
                                    "end": 184,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 163,
                                      "end": 183,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 163,
                                        "end": 181,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 163,
                                          "end": 177,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 163,
                                            "end": 167
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 168,
                                            "end": 177,
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 178,
                                          "end": 181,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
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
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
