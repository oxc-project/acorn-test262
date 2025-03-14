__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 118,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 118,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 117,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 117,
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "start": 112,
                "end": 116,
                "properties": []
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 20,
                  "end": 65,
                  "decorators": [],
                  "name": "opts",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 26,
                      "end": 65,
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "start": 32,
                          "end": 43,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": true,
                          "params": [],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 42,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 38,
                              "end": 42
                            }
                          },
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 48,
                          "end": 63,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 49,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 52,
                              "end": 62,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 55,
                                "end": 62,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 58,
                                  "end": 62
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 68,
                  "end": 107,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 74,
                      "end": 85,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": true,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 84,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 80,
                          "end": 84
                        }
                      },
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 90,
                      "end": 105,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "d",
                        "optional": false
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 92,
                        "end": 104,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 94,
                          "end": 104,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 97,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 100,
                              "end": 104
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
