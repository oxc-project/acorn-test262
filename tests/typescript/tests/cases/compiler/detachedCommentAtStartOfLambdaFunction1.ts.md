__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 298,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 298,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 296,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 296,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 296,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 84,
                    "end": 290,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 91,
                      "end": 289,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 270,
                        "end": 289,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 277,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 280,
                          "end": 289,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 280,
                            "end": 284
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 285,
                            "end": 289,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 92,
                          "end": 106,
                          "argument": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 106,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 98,
                              "end": 106,
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 98,
                                "end": 104
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 58,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 73,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 67,
                      "end": 73
                    }
                  },
                  "typeParameters": null
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "TestFile",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
