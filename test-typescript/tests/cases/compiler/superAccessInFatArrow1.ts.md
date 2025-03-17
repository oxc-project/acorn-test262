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
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 66,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 60,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 46,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 60,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 71,
            "end": 252,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 78,
              "end": 252,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 96,
                "end": 252,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 106,
                    "end": 144,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 109,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 109,
                      "end": 144,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 110,
                          "end": 130,
                          "name": "callback",
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
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 144,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 153,
                    "end": 246,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 158,
                      "name": "runme",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 158,
                      "end": 246,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 184,
                                  "end": 234,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                              "name": "foo",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
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
