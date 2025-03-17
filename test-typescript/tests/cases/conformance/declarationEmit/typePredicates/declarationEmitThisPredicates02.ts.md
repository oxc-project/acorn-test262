__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 70,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 70,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 42,
              "end": 52,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
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
                "start": 43,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 57,
              "end": 68,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
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
                "start": 58,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 60,
                  "end": 67
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 224,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 224,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 224,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 91,
              "end": 224,
              "properties": [
                {
                  "type": "Property",
                  "start": 97,
                  "end": 222,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
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
                    "start": 98,
                    "end": 222,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 114,
                      "end": 222,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 124,
                          "end": 152,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 128,
                              "end": 151,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 131,
                                "decorators": [],
                                "name": "dis",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "TSAsExpression",
                                "start": 134,
                                "end": 151,
                                "expression": {
                                  "type": "TSAsExpression",
                                  "start": 134,
                                  "end": 144,
                                  "expression": {
                                    "type": "ThisExpression",
                                    "start": 134,
                                    "end": 138
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 142,
                                    "end": 144,
                                    "members": []
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 148,
                                  "end": 151,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 148,
                                    "end": 151,
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
                          "start": 161,
                          "end": 216,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 168,
                            "end": 215,
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "start": 168,
                              "end": 198,
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 168,
                                "end": 181,
                                "operator": "!=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 168,
                                  "end": 173,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 168,
                                    "end": 171,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 172,
                                    "end": 173,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 177,
                                  "end": 181,
                                  "raw": "null",
                                  "value": null
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 185,
                                "end": 198,
                                "operator": "!=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 185,
                                  "end": 190,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 185,
                                    "end": 188,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 189,
                                    "end": 190,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 194,
                                  "end": 198,
                                  "raw": "null",
                                  "value": null
                                }
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "start": 202,
                              "end": 215,
                              "operator": "!=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 202,
                                "end": 207,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 202,
                                  "end": 205,
                                  "decorators": [],
                                  "name": "dis",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 206,
                                  "end": 207,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 211,
                                "end": 215,
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
                      "start": 100,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 102,
                        "end": 113,
                        "asserts": false,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 102,
                          "end": 106
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 110,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 110,
                            "end": 113,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 110,
                              "end": 113,
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
