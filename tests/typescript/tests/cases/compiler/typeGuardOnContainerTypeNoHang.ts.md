__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeGuards",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 58
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 66,
                        "end": 69
                      },
                      "start": 64,
                      "end": 69
                    },
                    "start": 59,
                    "end": 69
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 78
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 90,
                                    "end": 96
                                  },
                                  "start": 89,
                                  "end": 96
                                },
                                "start": 84,
                                "end": 96
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 98,
                                "end": 101
                              },
                              "start": 97,
                              "end": 101
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 83,
                            "end": 101
                          }
                        ],
                        "start": 82,
                        "end": 102
                      },
                      "start": 82,
                      "end": 102
                    },
                    "start": 73,
                    "end": 102
                  },
                  "start": 71,
                  "end": 102
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 132
                          },
                          "prefix": true,
                          "start": 120,
                          "end": 133
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "object",
                          "raw": "'object'",
                          "start": 138,
                          "end": 146
                        },
                        "start": 120,
                        "end": 146
                      },
                      "start": 113,
                      "end": 146
                    }
                  ],
                  "start": 103,
                  "end": 152
                },
                "expression": false,
                "start": 41,
                "end": 152
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 34,
              "end": 152
            }
          ],
          "start": 28,
          "end": 155
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 155
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
