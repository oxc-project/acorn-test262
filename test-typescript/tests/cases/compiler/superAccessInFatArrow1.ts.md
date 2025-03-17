__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 254,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 254,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 66,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 66,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 66,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 60,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 46,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 60,
                        "body": []
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
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 252,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 78,
              "end": 252,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 96,
                "end": 252,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 106,
                    "end": 144,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 109,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 144,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 144,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 110,
                          "end": 130,
                          "decorators": [],
                          "name": "callback",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 118,
                            "end": 130,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 120,
                              "end": 130,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 123,
                                "end": 130,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 126,
                                  "end": 130
                                }
                              },
                              "typeParameters": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 153,
                    "end": 246,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 158,
                      "decorators": [],
                      "name": "runme",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 158,
                      "end": 246,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 161,
                        "end": 246,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 175,
                            "end": 236,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 175,
                              "end": 235,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 184,
                                  "end": 234,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 190,
                                    "end": 234,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 208,
                                        "end": 220,
                                        "directive": null,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 208,
                                          "end": 219,
                                          "arguments": [],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 208,
                                            "end": 217,
                                            "computed": false,
                                            "object": {
                                              "type": "Super",
                                              "start": 208,
                                              "end": 213
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 214,
                                              "end": 217,
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
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 175,
                                "end": 183,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 175,
                                  "end": 179
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 180,
                                  "end": 183,
                                  "decorators": [],
                                  "name": "bar",
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
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
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
        "end": 11,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
