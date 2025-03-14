a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 77,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 34,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 77,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 70,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 43,
                      "end": 70,
                      "abstract": false,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 48,
                          "end": 62,
                          "argument": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 55,
                            "decorators": [],
                            "name": "args",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 57,
                              "end": 62,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 57,
                                "end": 60
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 67,
                          "end": 70
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "decorator",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TryStatement",
      "start": 81,
      "end": 232,
      "block": {
        "type": "BlockStatement",
        "start": 85,
        "end": 219,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 91,
            "end": 201,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 118,
              "end": 201,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 128,
                  "end": 195,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 146,
                    "decorators": [],
                    "name": "func",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 146,
                    "end": 195,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 154,
                      "end": 195,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 168,
                          "end": 185,
                          "argument": {
                            "type": "NewExpression",
                            "start": 175,
                            "end": 184,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 182,
                              "decorators": [],
                              "name": "Foo",
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 153,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 153,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 91,
                "end": 103,
                "expression": {
                  "type": "CallExpression",
                  "start": 92,
                  "end": 103,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 101,
                    "decorators": [],
                    "name": "decorator",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExpressionStatement",
            "start": 206,
            "end": 217,
            "expression": {
              "type": "CallExpression",
              "start": 206,
              "end": 216,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 206,
                "end": 214,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 209,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 214,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 220,
        "end": 232,
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 232,
          "body": []
        },
        "param": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
