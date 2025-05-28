__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 235,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "_bar",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 169,
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
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 121,
                            "end": 122,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 122,
                            "end": 130,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 124,
                              "end": 130
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 169,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 163,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 145,
                      "end": 162,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 145,
                        "end": 154,
                        "object": {
                          "type": "ThisExpression",
                          "start": 145,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "decorators": [],
                          "name": "_bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 174,
            "end": 233,
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
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 233,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 188,
                        "end": 196,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 190,
                          "end": 196
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 226,
                        "decorators": [],
                        "name": "_bar",
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
            "kind": "get",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
