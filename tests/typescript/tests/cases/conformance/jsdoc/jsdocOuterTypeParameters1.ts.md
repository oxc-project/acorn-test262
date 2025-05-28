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
      "start": 84,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 195,
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
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 123,
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 124,
                "end": 194,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 130,
                  "end": 194,
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "start": 134,
                      "end": 192,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 144,
                        "end": 192,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 150,
                            "end": 188,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 160,
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
                                "start": 163,
                                "end": 188,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 165,
                                    "end": 186,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 165,
                                      "end": 185,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 165,
                                        "end": 183,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 165,
                                          "end": 179,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 165,
                                            "end": 169
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 170,
                                            "end": 179,
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
                                          "start": 180,
                                          "end": 183,
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
