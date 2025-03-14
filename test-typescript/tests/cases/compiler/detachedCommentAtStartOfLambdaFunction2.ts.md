__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 299,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 299,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 299,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 297,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 297,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 297,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 84,
                    "end": 291,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 91,
                      "end": 290,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 271,
                        "end": 290,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 278,
                          "decorators": [],
                          "name": "message",
                          "optional": false
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 281,
                          "end": 290,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 281,
                            "end": 285
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 290,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 92,
                          "end": 106,
                          "argument": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 106,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 98,
                              "end": 106,
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 98,
                                "end": 104
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 58,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 73,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
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
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "TestFile",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
