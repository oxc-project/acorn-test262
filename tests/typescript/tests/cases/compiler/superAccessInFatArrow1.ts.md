__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 49
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
                        "body": [],
                        "start": 52,
                        "end": 63
                      },
                      "expression": false,
                      "start": 49,
                      "end": 63
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 46,
                    "end": 63
                  }
                ],
                "start": 36,
                "end": 69
              },
              "abstract": false,
              "declare": false,
              "start": 28,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 69
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
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
                      "start": 109,
                      "end": 112
                    },
                    "value": {
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
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 129,
                                  "end": 133
                                },
                                "start": 126,
                                "end": 133
                              },
                              "start": 123,
                              "end": 133
                            },
                            "start": 121,
                            "end": 133
                          },
                          "start": 113,
                          "end": 133
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 136,
                        "end": 147
                      },
                      "expression": false,
                      "start": 112,
                      "end": 147
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 109,
                    "end": 147
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "runme",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 161
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
                                  "type": "ThisExpression",
                                  "start": 178,
                                  "end": 182
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 183,
                                  "end": 186
                                },
                                "optional": false,
                                "computed": false,
                                "start": 178,
                                "end": 186
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
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Super",
                                              "start": 211,
                                              "end": 216
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "foo",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 217,
                                              "end": 220
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 211,
                                            "end": 220
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 211,
                                          "end": 222
                                        },
                                        "directive": null,
                                        "start": 211,
                                        "end": 223
                                      }
                                    ],
                                    "start": 193,
                                    "end": 237
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 187,
                                  "end": 237
                                }
                              ],
                              "optional": false,
                              "start": 178,
                              "end": 238
                            },
                            "directive": null,
                            "start": 178,
                            "end": 239
                          }
                        ],
                        "start": 164,
                        "end": 249
                      },
                      "expression": false,
                      "start": 161,
                      "end": 249
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 156,
                    "end": 249
                  }
                ],
                "start": 99,
                "end": 255
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 255
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 74,
            "end": 255
          }
        ],
        "start": 15,
        "end": 257
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
