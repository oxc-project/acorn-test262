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
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 87
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Y",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 91,
                                      "end": 94
                                    },
                                    "start": 89,
                                    "end": 94
                                  },
                                  "start": 88,
                                  "end": 94
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 118,
                                        "end": 119
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 114,
                                      "end": 121
                                    },
                                    "directive": null,
                                    "start": 114,
                                    "end": 122
                                  }
                                ],
                                "start": 96,
                                "end": 136
                              },
                              "expression": false,
                              "start": 87,
                              "end": 136
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 76,
                            "end": 136
                          }
                        ],
                        "start": 62,
                        "end": 146
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 54,
                      "end": 146
                    }
                  ],
                  "start": 44,
                  "end": 152
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 32,
                "end": 152
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 152
            }
          ],
          "start": 19,
          "end": 154
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 154
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 224,
                          "end": 235
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 216,
                        "end": 235
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 209,
                      "end": 235
                    }
                  ],
                  "start": 199,
                  "end": 241
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 187,
                "end": 241
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 180,
              "end": 241
            }
          ],
          "start": 174,
          "end": 243
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 162,
        "end": 243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 155,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
