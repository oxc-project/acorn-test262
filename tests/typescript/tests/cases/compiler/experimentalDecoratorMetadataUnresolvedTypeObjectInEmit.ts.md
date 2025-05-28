__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 140,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 138,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 33,
              "end": 138,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 45,
                "end": 138,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 55,
                    "end": 132,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 62,
                      "end": 132,
                      "id": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 74,
                        "end": 132,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 88,
                            "end": 122,
                            "declaration": {
                              "type": "TSModuleDeclaration",
                              "start": 95,
                              "end": 122,
                              "id": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "body": {
                                "type": "TSModuleBlock",
                                "start": 107,
                                "end": 122,
                                "body": []
                              },
                              "kind": "namespace",
                              "declare": false,
                              "global": false
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": []
                          }
                        ]
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 43,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 18,
                      "end": 27,
                      "expression": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 27,
                        "decorators": [],
                        "name": "decorate",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "user",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 43,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 34,
                        "end": 43,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 34,
                          "end": 41,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 34,
                            "end": 39,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 34,
                              "end": 37,
                              "left": {
                                "type": "Identifier",
                                "start": 34,
                                "end": 35,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 36,
                                "end": 37,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 38,
                              "end": 39,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 41,
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 53,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
