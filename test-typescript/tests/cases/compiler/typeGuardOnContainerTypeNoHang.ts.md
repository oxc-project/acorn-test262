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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "name": "TypeGuards",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 28,
          "end": 155,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 34,
              "end": 152,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 41,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "name": "IsObject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 69,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 66,
                        "end": 69
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "left": {
                          "type": "UnaryExpression",
                          "start": 120,
                          "end": 133,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 132,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 138,
                          "end": 146,
                          "value": "object",
                          "raw": "'object'"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 73,
                    "end": 102,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 78,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": false,
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
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 84,
                                "end": 96,
                                "name": "index",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 89,
                                  "end": 96,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 90,
                                    "end": 96
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 97,
                              "end": 101,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 98,
                                "end": 101
                              }
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
