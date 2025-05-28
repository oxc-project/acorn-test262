__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 260,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 258,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 258,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 32,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 37,
                "end": 258,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 68,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 57,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 67,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 75,
                    "end": 177,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 89,
                      "decorators": [],
                      "name": "setName",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 92,
                      "end": 177,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 101,
                          "end": 114,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 106,
                            "end": 114,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 108,
                              "end": 114
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 117,
                          "end": 121
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 122,
                        "end": 177,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 127,
                            "end": 169,
                            "expression": {
                              "type": "CallExpression",
                              "start": 127,
                              "end": 168,
                              "callee": {
                                "type": "FunctionExpression",
                                "start": 128,
                                "end": 165,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 140,
                                  "end": 165,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 149,
                                      "end": 160,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 149,
                                        "end": 159,
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "start": 149,
                                          "end": 153,
                                          "decorators": [],
                                          "name": "name",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 154,
                                          "end": 159,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "expression": false
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
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 184,
                    "end": 252,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 198,
                      "decorators": [],
                      "name": "getName",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 201,
                      "end": 252,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 211,
                        "end": 219,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 213,
                          "end": 219
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 220,
                        "end": 252,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 232,
                            "end": 244,
                            "argument": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 243,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
