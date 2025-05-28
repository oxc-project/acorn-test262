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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 151,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 151,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 63,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 33,
                    "end": 63,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 36,
                      "end": 63,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 46,
                          "end": 57,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 46,
                            "end": 56,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 46,
                              "end": 54,
                              "object": {
                                "type": "ThisExpression",
                                "start": 46,
                                "end": 50
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 51,
                                "end": 54,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 76,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 74,
                    "end": 75,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 81,
                  "end": 120,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "decorators": [],
                    "name": "inc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 87,
                    "end": 120,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 93,
                      "end": 120,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 103,
                          "end": 114,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 103,
                            "end": 113,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 103,
                              "end": 111,
                              "object": {
                                "type": "ThisExpression",
                                "start": 103,
                                "end": 107
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 108,
                                "end": 111,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 125,
                  "end": 149,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 126,
                    "end": 149,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "object": {
                              "type": "ThisExpression",
                              "start": 138,
                              "end": 142
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 143,
                              "end": 146,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
