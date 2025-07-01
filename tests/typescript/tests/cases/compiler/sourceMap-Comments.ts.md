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
          "start": 7,
          "end": 10
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tools",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 16
        },
        "start": 7,
        "end": 16
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
                "start": 36,
                "end": 40
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
                      "start": 58,
                      "end": 61
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
                          "start": 65,
                          "end": 69
                        },
                        "start": 63,
                        "end": 69
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
                                      "start": 91,
                                      "end": 97
                                    },
                                    "start": 89,
                                    "end": 97
                                  },
                                  "start": 88,
                                  "end": 97
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 100,
                                  "end": 101
                                },
                                "definite": false,
                                "start": 88,
                                "end": 101
                              }
                            ],
                            "declare": false,
                            "start": 84,
                            "end": 102
                          },
                          {
                            "type": "SwitchStatement",
                            "discriminant": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 123,
                              "end": 124
                            },
                            "cases": [
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 149,
                                  "end": 150
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 172,
                                    "end": 178
                                  }
                                ],
                                "start": 144,
                                "end": 178
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 200,
                                  "end": 201
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 297,
                                    "end": 303
                                  }
                                ],
                                "start": 195,
                                "end": 303
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 325,
                                  "end": 326
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 380,
                                    "end": 386
                                  }
                                ],
                                "start": 320,
                                "end": 386
                              }
                            ],
                            "start": 115,
                            "end": 400
                          }
                        ],
                        "start": 70,
                        "end": 410
                      },
                      "expression": false,
                      "start": 61,
                      "end": 410
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 51,
                    "end": 410
                  }
                ],
                "start": 41,
                "end": 416
              },
              "abstract": false,
              "declare": false,
              "start": 30,
              "end": 416
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 416
          }
        ],
        "start": 17,
        "end": 419
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 419
}
```
