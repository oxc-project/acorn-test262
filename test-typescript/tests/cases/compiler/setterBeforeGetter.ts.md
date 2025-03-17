__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 46,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "_bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 45,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 33,
                    "end": 43,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 169,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 169,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 163,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 145,
                      "end": 162,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 145,
                        "end": 154,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 145,
                          "end": 149
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "decorators": [],
                          "name": "_bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "decorators": [],
                        "name": "thing",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 133,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 119,
                      "end": 133,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 121,
                          "end": 131,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 121,
                            "end": 122,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 122,
                            "end": 130,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 124,
                              "end": 130
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 174,
            "end": 233,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 233,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 233,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 227,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 217,
                      "end": 226,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 226,
                        "decorators": [],
                        "name": "_bar",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 183,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 185,
                  "end": 199,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 187,
                      "end": 197,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 188,
                        "end": 196,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 190,
                          "end": 196
                        }
                      }
                    }
                  ]
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
