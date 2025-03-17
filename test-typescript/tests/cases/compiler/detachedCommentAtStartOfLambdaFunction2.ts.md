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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "TestFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 299,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 297,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 297,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 58,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 92,
                          "end": 106,
                          "argument": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
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
                          },
                          "value": null
                        }
                      ],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 271,
                        "end": 290,
                        "left": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 278,
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 281,
                          "end": 290,
                          "object": {
                            "type": "ThisExpression",
                            "start": 281,
                            "end": 285
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 290,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 73,
                  "typeParameters": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
