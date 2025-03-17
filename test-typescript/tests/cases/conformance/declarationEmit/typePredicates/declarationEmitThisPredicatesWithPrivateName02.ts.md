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
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 217,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 72,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 217,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 91,
                    "end": 215,
                    "async": false,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 124,
                                "decorators": [],
                                "name": "dis",
                                "optional": false,
                                "typeAnnotation": null
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
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 141,
                                    "end": 144,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 154,
                          "end": 209,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 161,
                            "end": 208,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 161,
                              "end": 191,
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 161,
                                "end": 174,
                                "operator": "!=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 161,
                                  "end": 166,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 164,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 165,
                                    "end": 166,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 170,
                                  "end": 174,
                                  "raw": "null",
                                  "value": null
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 178,
                                "end": 191,
                                "operator": "!=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 178,
                                  "end": 183,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 178,
                                    "end": 181,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 182,
                                    "end": 183,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 187,
                                  "end": 191,
                                  "raw": "null",
                                  "value": null
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "start": 195,
                              "end": 208,
                              "operator": "!=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 195,
                                "end": 200,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 195,
                                  "end": 198,
                                  "decorators": [],
                                  "name": "dis",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 199,
                                  "end": 200,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 204,
                                "end": 208,
                                "raw": "null",
                                "value": null
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 95,
                        "end": 106,
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 95,
                          "end": 99
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 103,
                          "end": 106,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 103,
                            "end": 106,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 106,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
