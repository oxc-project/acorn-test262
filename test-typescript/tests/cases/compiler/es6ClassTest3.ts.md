__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 227,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 227,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 13,
            "end": 225,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 225,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 37,
                  "end": 53,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 47,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 47,
                    "end": 53,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 50,
                      "end": 53,
                      "body": []
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
                  "type": "MethodDefinition",
                  "start": 60,
                  "end": 77,
                  "accessibility": "private",
                  "computed": false,
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
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 71,
                    "end": 77,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 74,
                      "end": 77,
                      "body": []
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
                  "start": 87,
                  "end": 105,
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 98,
                      "end": 104
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 111,
                  "end": 128,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 121,
                      "end": 127
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 134,
                  "end": 151,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 158,
                  "end": 222,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 169,
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
                    "start": 169,
                    "end": 222,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 172,
                      "end": 222,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 183,
                          "end": 194,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 183,
                            "end": 193,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 183,
                              "end": 189,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 183,
                                "end": 187
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 188,
                                "end": 189,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 192,
                              "end": 193,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 204,
                          "end": 215,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 204,
                            "end": 214,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 204,
                              "end": 210,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 204,
                                "end": 208
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 210,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 213,
                              "end": 214,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
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
              "start": 19,
              "end": 29,
              "decorators": [],
              "name": "Visibility",
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
        "end": 8,
        "decorators": [],
        "name": "M",
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
