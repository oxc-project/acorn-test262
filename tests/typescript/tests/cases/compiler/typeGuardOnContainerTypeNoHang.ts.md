__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 155,
        "body": {
          "type": "TSModuleBlock",
          "start": 28,
          "end": 155,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 34,
              "end": 152,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 41,
                "end": 152,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 103,
                  "end": 152,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 113,
                      "end": 146,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 120,
                        "end": 146,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 120,
                          "end": 133,
                          "argument": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 132,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 138,
                          "end": 146,
                          "raw": "'object'",
                          "value": "object"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "decorators": [],
                  "name": "IsObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 69,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 66,
                        "end": 69
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 73,
                    "end": 102,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 78,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 82,
                        "end": 102,
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "start": 83,
                            "end": 101,
                            "accessibility": null,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 84,
                                "end": 96,
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 89,
                                  "end": 96,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 90,
                                    "end": 96
                                  }
                                }
                              }
                            ],
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 97,
                              "end": 101,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 98,
                                "end": 101
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
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
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "TypeGuards",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
