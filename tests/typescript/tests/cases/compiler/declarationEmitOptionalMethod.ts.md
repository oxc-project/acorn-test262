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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 118,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 117,
              "expression": true,
              "async": false,
              "typeParameters": null,
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
                          "key": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 33,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "computed": false,
                          "optional": true,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
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
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 48,
                          "end": 63,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 49,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 62,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 52,
                              "end": 62,
                              "typeParameters": null,
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
                          },
                          "accessibility": null,
                          "static": false
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
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": true,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
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
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 90,
                      "end": 105,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 92,
                        "end": 104,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 94,
                          "end": 104,
                          "typeParameters": null,
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
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "body": {
                "type": "ObjectExpression",
                "start": 112,
                "end": 116,
                "properties": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
