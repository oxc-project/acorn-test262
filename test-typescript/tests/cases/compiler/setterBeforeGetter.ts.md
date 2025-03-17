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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 235,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "_bar",
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 133,
                  "name": "thing",
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
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "_bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "type": "MethodDefinition",
            "start": 174,
            "end": 233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 233,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "_bar",
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
