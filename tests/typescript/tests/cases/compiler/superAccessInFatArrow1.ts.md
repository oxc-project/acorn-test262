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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 254,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 66,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 66,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 66,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 60,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 60,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 252,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 78,
              "end": 252,
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
              "typeParameters": null,
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
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 96,
                "end": 252,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 106,
                    "end": 144,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 144,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                              "typeParameters": null,
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
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 144,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 153,
                    "end": 246,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 158,
                      "end": 246,
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
                        "end": 246,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 175,
                            "end": 236,
                            "expression": {
                              "type": "CallExpression",
                              "start": 175,
                              "end": 235,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 175,
                                "end": 183,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 175,
                                  "end": 179
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 180,
                                  "end": 183,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 184,
                                  "end": 234,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 190,
                                    "end": 234,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 208,
                                        "end": 220,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 208,
                                          "end": 219,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 208,
                                            "end": 217,
                                            "object": {
                                              "type": "Super",
                                              "start": 208,
                                              "end": 213
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 214,
                                              "end": 217,
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
                                  "id": null,
                                  "generator": false
                                }
                              ],
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
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
