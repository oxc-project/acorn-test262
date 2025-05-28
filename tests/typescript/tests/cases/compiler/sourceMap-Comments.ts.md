__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
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
          "decorators": [],
          "name": "sas",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 16,
          "decorators": [],
          "name": "tools",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 416,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 51,
                    "end": 410,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 61,
                      "decorators": [],
                      "name": "doX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 61,
                      "end": 410,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 63,
                        "end": 69,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 65,
                          "end": 69
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 70,
                        "end": 410,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 84,
                            "end": 102,
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 88,
                                "end": 101,
                                "id": {
                                  "type": "Identifier",
                                  "start": 88,
                                  "end": 97,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 89,
                                    "end": 97,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 91,
                                      "end": 97
                                    }
                                  }
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "cases": [
                              {
                                "type": "SwitchCase",
                                "start": 144,
                                "end": 178,
                                "test": {
                                  "type": "Literal",
                                  "start": 149,
                                  "end": 150,
                                  "value": 1,
                                  "raw": "1"
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 172,
                                    "end": 178,
                                    "label": null
                                  }
                                ]
                              },
                              {
                                "type": "SwitchCase",
                                "start": 195,
                                "end": 303,
                                "test": {
                                  "type": "Literal",
                                  "start": 200,
                                  "end": 201,
                                  "value": 2,
                                  "raw": "2"
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 297,
                                    "end": 303,
                                    "label": null
                                  }
                                ]
                              },
                              {
                                "type": "SwitchCase",
                                "start": 320,
                                "end": 386,
                                "test": {
                                  "type": "Literal",
                                  "start": 325,
                                  "end": 326,
                                  "value": 3,
                                  "raw": "3"
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 380,
                                    "end": 386,
                                    "label": null
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
