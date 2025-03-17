__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 32,
                "name": "Test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 37,
                "end": 258,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 68,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 57,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 67,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 75,
                    "end": 177,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 89,
                      "name": "setName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 92,
                      "end": 177,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 101,
                          "end": 114,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 106,
                            "end": 114,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 108,
                              "end": 114
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
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
                                          "name": "name",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 154,
                                          "end": 159,
                                          "name": "value",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 121,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 117,
                          "end": 121
                        }
                      }
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 184,
                    "end": 252,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 198,
                      "name": "getName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 201,
                      "end": 252,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 211,
                        "end": 219,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 213,
                          "end": 219
                        }
                      }
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
