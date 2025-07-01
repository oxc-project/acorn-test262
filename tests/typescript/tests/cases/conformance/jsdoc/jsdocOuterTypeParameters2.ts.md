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
            "start": 88,
            "end": 105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 121
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
                        "start": 138,
                        "end": 141
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
                              "start": 155,
                              "end": 158
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
                                            "start": 163,
                                            "end": 167
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 168,
                                            "end": 177
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 163,
                                          "end": 177
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 178,
                                          "end": 181
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 163,
                                        "end": 181
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 163,
                                      "end": 183
                                    },
                                    "directive": null,
                                    "start": 163,
                                    "end": 184
                                  }
                                ],
                                "start": 161,
                                "end": 186
                              },
                              "expression": false,
                              "start": 158,
                              "end": 186
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 148,
                            "end": 186
                          }
                        ],
                        "start": 142,
                        "end": 190
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 132,
                      "end": 190
                    }
                  ],
                  "start": 128,
                  "end": 192
                },
                "id": null,
                "generator": false,
                "start": 122,
                "end": 192
              }
            ],
            "optional": false,
            "start": 108,
            "end": 193
          },
          "definite": false,
          "start": 88,
          "end": 193
        }
      ],
      "declare": false,
      "start": 82,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 195
}
```
