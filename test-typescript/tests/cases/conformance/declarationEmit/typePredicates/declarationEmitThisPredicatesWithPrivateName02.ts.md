__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 217,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 72,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 217,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 84,
              "end": 217,
              "properties": [
                {
                  "type": "Property",
                  "start": 90,
                  "end": 215,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 91,
                    "end": 215,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 215,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 117,
                          "end": 145,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 121,
                              "end": 144,
                              "id": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 124,
                                "name": "dis",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "start": 127,
                                "end": 144,
                                "expression": {
                                  "type": "TSAsExpression",
                                  "start": 127,
                                  "end": 137,
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 127,
                                    "end": 131
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 135,
                                    "end": 137,
                                    "members": []
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 141,
                                  "end": 144,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 141,
                                    "end": 144,
                                    "name": "Foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 154,
                          "end": 209,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 161,
                            "end": 208,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 161,
                              "end": 191,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 161,
                                "end": 174,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 161,
                                  "end": 166,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 164,
                                    "name": "dis",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 165,
                                    "end": 166,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "start": 170,
                                  "end": 174,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 178,
                                "end": 191,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 178,
                                  "end": 183,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 178,
                                    "end": 181,
                                    "name": "dis",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 182,
                                    "end": 183,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "start": 187,
                                  "end": 191,
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "BinaryExpression",
                              "start": 195,
                              "end": 208,
                              "left": {
                                "type": "MemberExpression",
                                "start": 195,
                                "end": 200,
                                "object": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 198,
                                  "name": "dis",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 199,
                                  "end": 200,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "start": 204,
                                "end": 208,
                                "value": null,
                                "raw": "null"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 95,
                        "end": 106,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 95,
                          "end": 99
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 103,
                          "end": 106,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 103,
                            "end": 106,
                            "typeName": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 106,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
