__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 36
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "abc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 50
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 52,
                            "end": 58
                          },
                          "start": 50,
                          "end": 58
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 47,
                        "end": 58
                      }
                    ],
                    "start": 45,
                    "end": 60
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 35,
                  "end": 60
                }
              ],
              "start": 34,
              "end": 61
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "typeArguments": null,
                    "start": 65,
                    "end": 66
                  },
                  "start": 63,
                  "end": 66
                },
                "start": 62,
                "end": 66
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 85,
                                "end": 86
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "abc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 87,
                                "end": 90
                              },
                              "start": 85,
                              "end": 90
                            },
                            "typeArguments": null,
                            "start": 85,
                            "end": 90
                          },
                          "start": 83,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 94
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "abc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 98
                        },
                        "optional": false,
                        "computed": false,
                        "start": 93,
                        "end": 98
                      },
                      "definite": false,
                      "start": 82,
                      "end": 98
                    }
                  ],
                  "declare": false,
                  "start": 78,
                  "end": 99
                }
              ],
              "start": 68,
              "end": 105
            },
            "expression": false,
            "start": 22,
            "end": 105
          }
        ],
        "start": 16,
        "end": 107
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
