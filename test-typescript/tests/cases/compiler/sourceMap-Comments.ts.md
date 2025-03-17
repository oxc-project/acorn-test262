__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 420,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 419,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 16,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 10,
          "name": "sas",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 16,
          "name": "tools",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 419,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 416,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 30,
              "end": 416,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "name": "Test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 416,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 51,
                    "end": 410,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 61,
                      "name": "doX",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 61,
                      "end": 410,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 70,
                        "end": 410,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 84,
                            "end": 102,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 88,
                                "end": 101,
                                "id": {
                                  "type": "Identifier",
                                  "start": 88,
                                  "end": 97,
                                  "name": "f",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 89,
                                    "end": 97,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 91,
                                      "end": 97
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 100,
                                  "end": 101,
                                  "value": 2,
                                  "raw": "2"
                                },
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          },
                          {
                            "type": "SwitchStatement",
                            "start": 115,
                            "end": 400,
                            "discriminant": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 124,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "cases": [
                              {
                                "type": "SwitchCase",
                                "start": 144,
                                "end": 178,
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 172,
                                    "end": 178,
                                    "label": null
                                  }
                                ],
                                "test": {
                                  "type": "Literal",
                                  "start": 149,
                                  "end": 150,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              {
                                "type": "SwitchCase",
                                "start": 195,
                                "end": 303,
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 297,
                                    "end": 303,
                                    "label": null
                                  }
                                ],
                                "test": {
                                  "type": "Literal",
                                  "start": 200,
                                  "end": 201,
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              {
                                "type": "SwitchCase",
                                "start": 320,
                                "end": 386,
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 380,
                                    "end": 386,
                                    "label": null
                                  }
                                ],
                                "test": {
                                  "type": "Literal",
                                  "start": 325,
                                  "end": 326,
                                  "value": 3,
                                  "raw": "3"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 63,
                        "end": 69,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 65,
                          "end": 69
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
