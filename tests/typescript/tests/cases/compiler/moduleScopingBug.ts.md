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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    },
                    "start": 29,
                    "end": 37
                  },
                  "start": 24,
                  "end": 37
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 37
              }
            ],
            "declare": false,
            "start": 20,
            "end": 38
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 77
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 85
                      },
                      "definite": false,
                      "start": 72,
                      "end": 85
                    }
                  ],
                  "declare": false,
                  "start": 68,
                  "end": 86
                }
              ],
              "start": 57,
              "end": 101
            },
            "expression": false,
            "start": 44,
            "end": 101
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
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
                    "start": 126,
                    "end": 137
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 163
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 166,
                                "end": 171
                              },
                              "definite": false,
                              "start": 158,
                              "end": 171
                            }
                          ],
                          "declare": false,
                          "start": 154,
                          "end": 172
                        }
                      ],
                      "start": 140,
                      "end": 190
                    },
                    "expression": false,
                    "start": 137,
                    "end": 190
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 126,
                  "end": 190
                }
              ],
              "start": 115,
              "end": 197
            },
            "abstract": false,
            "declare": false,
            "start": 107,
            "end": 197
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 235
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 243
                      },
                      "definite": false,
                      "start": 230,
                      "end": 243
                    }
                  ],
                  "declare": false,
                  "start": 226,
                  "end": 244
                }
              ],
              "start": 215,
              "end": 281
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 203,
            "end": 281
          }
        ],
        "start": 13,
        "end": 284
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
