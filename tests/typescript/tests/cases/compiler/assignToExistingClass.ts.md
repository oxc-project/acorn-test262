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
        "start": 7,
        "end": 11
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
              "start": 24,
              "end": 30
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
                    "start": 41,
                    "end": 47
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    },
                    "start": 47,
                    "end": 55
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
                  "start": 41,
                  "end": 56
                }
              ],
              "start": 31,
              "end": 62
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 62
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
              "start": 74,
              "end": 80
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
                    "start": 91,
                    "end": 105
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
                              "start": 122,
                              "end": 128
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mocked",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 131,
                                "end": 137
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
                                              "start": 242,
                                              "end": 248
                                            },
                                            "value": {
                                              "type": "Literal",
                                              "value": "test",
                                              "raw": "\"test\"",
                                              "start": 250,
                                              "end": 256
                                            },
                                            "method": false,
                                            "shorthand": false,
                                            "computed": false,
                                            "optional": false,
                                            "start": 242,
                                            "end": 256
                                          }
                                        ],
                                        "start": 240,
                                        "end": 258
                                      },
                                      "start": 233,
                                      "end": 259
                                    }
                                  ],
                                  "start": 153,
                                  "end": 273
                                },
                                "expression": false,
                                "start": 141,
                                "end": 273
                              },
                              "start": 131,
                              "end": 273
                            },
                            "start": 122,
                            "end": 273
                          },
                          "directive": null,
                          "start": 122,
                          "end": 274
                        }
                      ],
                      "start": 108,
                      "end": 284
                    },
                    "expression": false,
                    "start": 105,
                    "end": 284
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 91,
                  "end": 284
                }
              ],
              "start": 81,
              "end": 290
            },
            "abstract": false,
            "declare": false,
            "start": 68,
            "end": 290
          }
        ],
        "start": 12,
        "end": 294
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 294
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
