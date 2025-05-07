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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 294,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 18,
            "end": 62,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 31,
              "end": 62,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 41,
                  "end": 56,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 47,
                    "decorators": [],
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
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
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 68,
            "end": 290,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 81,
              "end": 290,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 91,
                  "end": 284,
                  "accessibility": null,
                  "computed": false,
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
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 105,
                    "end": 284,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 108,
                      "end": 284,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 122,
                          "end": 274,
                          "directive": null,
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
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 137,
                                "decorators": [],
                                "name": "Mocked",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "FunctionExpression",
                                "start": 141,
                                "end": 273,
                                "async": false,
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
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 242,
                                              "end": 248,
                                              "decorators": [],
                                              "name": "myProp",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "optional": false,
                                            "shorthand": false,
                                            "value": {
                                              "type": "Literal",
                                              "start": 250,
                                              "end": 256,
                                              "raw": "\"test\"",
                                              "value": "test",
                                              "regex": null,
                                              "bigint": null
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
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
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
