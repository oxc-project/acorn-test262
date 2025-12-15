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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "Test",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
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
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 60
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 63,
                      "end": 70
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 48,
                    "end": 71
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 92
                    },
                    "typeAnnotation": null,
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 111,
                              "end": 117
                            },
                            "start": 109,
                            "end": 117
                          },
                          "start": 104,
                          "end": 117
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 120,
                          "end": 124
                        },
                        "start": 118,
                        "end": 124
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
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
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 152,
                                          "end": 156
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 157,
                                          "end": 162
                                        },
                                        "start": 152,
                                        "end": 162
                                      },
                                      "directive": null,
                                      "start": 152,
                                      "end": 163
                                    }
                                  ],
                                  "start": 143,
                                  "end": 168
                                },
                                "expression": false,
                                "start": 131,
                                "end": 168
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 130,
                              "end": 171
                            },
                            "directive": null,
                            "start": 130,
                            "end": 172
                          }
                        ],
                        "start": 125,
                        "end": 180
                      },
                      "expression": false,
                      "start": 95,
                      "end": 180
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 78,
                    "end": 180
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 201
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 216,
                          "end": 222
                        },
                        "start": 214,
                        "end": 222
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 242,
                              "end": 246
                            },
                            "start": 235,
                            "end": 247
                          }
                        ],
                        "start": 223,
                        "end": 255
                      },
                      "expression": false,
                      "start": 204,
                      "end": 255
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 187,
                    "end": 255
                  }
                ],
                "start": 40,
                "end": 261
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 261
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 261
          }
        ],
        "start": 12,
        "end": 263
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
