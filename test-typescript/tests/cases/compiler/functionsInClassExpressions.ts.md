__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 151,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 151,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 63,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 33,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 33,
                    "end": 63,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 36,
                      "end": 63,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 46,
                          "end": 57,
                          "directive": null,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 46,
                            "end": 56,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 46,
                              "end": 54,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 46,
                                "end": 50
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 51,
                                "end": 54,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "++",
                            "prefix": false
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 76,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 74,
                    "end": 75,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 81,
                  "end": 120,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "decorators": [],
                    "name": "inc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 87,
                    "end": 120,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 93,
                      "end": 120,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 103,
                          "end": 114,
                          "directive": null,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 103,
                            "end": 113,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 103,
                              "end": 111,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 108,
                                "end": 111,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "++",
                            "prefix": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 125,
                  "end": 149,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 126,
                    "end": 149,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 129,
                      "end": 149,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 131,
                          "end": 147,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 138,
                            "end": 146,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 138,
                              "end": 142
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 146,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
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
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
