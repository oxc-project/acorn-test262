__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 294,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 18,
            "end": 62,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "Mocked",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 31,
              "end": 62,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 41,
                  "end": 56,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 47,
                    "decorators": [],
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 68,
            "end": 290,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 80,
              "decorators": [],
              "name": "Tester",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 81,
              "end": 290,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 91,
                  "end": 284,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 105,
                    "decorators": [],
                    "name": "willThrowError",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 105,
                    "end": 284,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 108,
                      "end": 284,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 122,
                          "end": 274,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 122,
                            "end": 273,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 128,
                              "decorators": [],
                              "name": "Mocked",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 131,
                              "end": 273,
                              "left": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 137,
                                "decorators": [],
                                "name": "Mocked",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "||",
                              "right": {
                                "type": "FunctionExpression",
                                "start": 141,
                                "end": 273,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 153,
                                  "end": 273,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 233,
                                      "end": 259,
                                      "argument": {
                                        "type": "ObjectExpression",
                                        "start": 240,
                                        "end": 258,
                                        "properties": [
                                          {
                                            "type": "Property",
                                            "start": 242,
                                            "end": 256,
                                            "kind": "init",
                                            "key": {
                                              "type": "Identifier",
                                              "start": 242,
                                              "end": 248,
                                              "decorators": [],
                                              "name": "myProp",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "start": 250,
                                              "end": 256,
                                              "value": "test",
                                              "raw": "\"test\""
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              }
                            }
                          },
                          "directive": null
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
