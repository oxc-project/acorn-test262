selfRef.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 260,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 258,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 258,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 37,
                "end": 258,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 68,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 57,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 67,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 75,
                    "end": 177,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 89,
                      "decorators": [],
                      "name": "setName",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 92,
                      "end": 177,
                      "async": false,
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
                              "arguments": [],
                              "callee": {
                                "type": "FunctionExpression",
                                "start": 128,
                                "end": 165,
                                "async": false,
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
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 154,
                                          "end": 159,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": []
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 184,
                    "end": 252,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 198,
                      "decorators": [],
                      "name": "getName",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 201,
                      "end": 252,
                      "async": false,
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
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 32,
                "decorators": [],
                "name": "Test",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
