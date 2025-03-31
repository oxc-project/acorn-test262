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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 151,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 151,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 63,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 33,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 33,
                    "end": 63,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 76,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 71,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 74,
                    "end": 75,
                    "value": 0,
                    "raw": "0"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 81,
                  "end": 120,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 84,
                    "name": "inc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 87,
                    "end": 120,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 125,
                  "end": 149,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 126,
                    "end": 149,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
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
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
