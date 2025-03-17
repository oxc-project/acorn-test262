__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "name": "Mocked",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 31,
              "end": 62,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 41,
                  "end": 56,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 47,
                    "name": "myProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
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
          {
            "type": "ClassDeclaration",
            "start": 68,
            "end": 290,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 80,
              "name": "Tester",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 81,
              "end": 290,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 91,
                  "end": 284,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 105,
                    "name": "willThrowError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 105,
                    "end": 284,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "name": "Mocked",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 131,
                              "end": 273,
                              "left": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 137,
                                "name": "Mocked",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "FunctionExpression",
                                "start": 141,
                                "end": 273,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
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
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 242,
                                              "end": 248,
                                              "name": "myProp",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "start": 250,
                                              "end": 256,
                                              "value": "test",
                                              "raw": "\"test\""
                                            },
                                            "kind": "init",
                                            "optional": false
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
