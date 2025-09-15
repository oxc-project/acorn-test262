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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "Mocked",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 50
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    },
                    "start": 50,
                    "end": 58
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 44,
                  "end": 59
                }
              ],
              "start": 34,
              "end": 65
            },
            "abstract": false,
            "declare": false,
            "start": 21,
            "end": 65
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tester",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 83
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
                    "name": "willThrowError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 108
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mocked",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 131
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mocked",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 134,
                                "end": 140
                              },
                              "operator": "||",
                              "right": {
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
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "ObjectExpression",
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "myProp",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 245,
                                              "end": 251
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "value": "test",
                                              "raw": "\"test\"",
                                              "start": 253,
                                              "end": 259
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false,
                                            "start": 245,
                                            "end": 259
                                          }
                                        ],
                                        "start": 243,
                                        "end": 261
                                      },
                                      "start": 236,
                                      "end": 262
                                    }
                                  ],
                                  "start": 156,
                                  "end": 276
                                },
                                "expression": false,
                                "start": 144,
                                "end": 276
                              },
                              "start": 134,
                              "end": 276
                            },
                            "start": 125,
                            "end": 276
                          },
                          "directive": null,
                          "start": 125,
                          "end": 277
                        }
                      ],
                      "start": 111,
                      "end": 287
                    },
                    "expression": false,
                    "start": 108,
                    "end": 287
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 94,
                  "end": 287
                }
              ],
              "start": 84,
              "end": 293
            },
            "abstract": false,
            "declare": false,
            "start": 71,
            "end": 293
          }
        ],
        "start": 15,
        "end": 297
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
