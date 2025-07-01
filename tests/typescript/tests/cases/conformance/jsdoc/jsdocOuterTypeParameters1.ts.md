__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dedupingMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 38
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 57,
              "end": 59
            },
            "expression": false,
            "start": 41,
            "end": 59
          },
          "definite": false,
          "start": 25,
          "end": 59
        }
      ],
      "declare": false,
      "start": 19,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertyAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 107
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 143
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 160
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 165,
                                            "end": 169
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 170,
                                            "end": 179
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 165,
                                          "end": 179
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 180,
                                          "end": 183
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 165,
                                        "end": 183
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 165,
                                      "end": 185
                                    },
                                    "directive": null,
                                    "start": 165,
                                    "end": 186
                                  }
                                ],
                                "start": 163,
                                "end": 188
                              },
                              "expression": false,
                              "start": 160,
                              "end": 188
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 150,
                            "end": 188
                          }
                        ],
                        "start": 144,
                        "end": 192
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 134,
                      "end": 192
                    }
                  ],
                  "start": 130,
                  "end": 194
                },
                "id": null,
                "generator": false,
                "start": 124,
                "end": 194
              }
            ],
            "optional": false,
            "start": 110,
            "end": 195
          },
          "definite": false,
          "start": 90,
          "end": 195
        }
      ],
      "declare": false,
      "start": 84,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 197
}
```
