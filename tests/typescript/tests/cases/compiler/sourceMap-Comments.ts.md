__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sas",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tools",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 19
        },
        "start": 10,
        "end": 19
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
                "name": "Test",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
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
                      "name": "doX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 64
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 68,
                          "end": 72
                        },
                        "start": 66,
                        "end": 72
                      },
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 94,
                                      "end": 100
                                    },
                                    "start": 92,
                                    "end": 100
                                  },
                                  "start": 91,
                                  "end": 100
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 103,
                                  "end": 104
                                },
                                "definite": false,
                                "start": 91,
                                "end": 104
                              }
                            ],
                            "declare": false,
                            "start": 87,
                            "end": 105
                          },
                          {
                            "type": "SwitchStatement",
                            "discriminant": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 126,
                              "end": 127
                            },
                            "cases": [
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 152,
                                  "end": 153
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 175,
                                    "end": 181
                                  }
                                ],
                                "start": 147,
                                "end": 181
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 203,
                                  "end": 204
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 300,
                                    "end": 306
                                  }
                                ],
                                "start": 198,
                                "end": 306
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 328,
                                  "end": 329
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 383,
                                    "end": 389
                                  }
                                ],
                                "start": 323,
                                "end": 389
                              }
                            ],
                            "start": 118,
                            "end": 403
                          }
                        ],
                        "start": 73,
                        "end": 413
                      },
                      "expression": false,
                      "start": 64,
                      "end": 413
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 54,
                    "end": 413
                  }
                ],
                "start": 44,
                "end": 419
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 419
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 419
          }
        ],
        "start": 20,
        "end": 422
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 422
}
```
