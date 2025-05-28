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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 70,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 37,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 42,
              "end": 52,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 43,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 57,
              "end": 68,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 60,
                  "end": 67
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 224,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 224,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 224,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 98,
                    "end": 222,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 102,
                        "end": 113,
                        "parameterName": {
                          "type": "TSThisType",
                          "start": 102,
                          "end": 106
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 110,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 110,
                            "end": 113,
                            "typeName": {
                              "type": "Identifier",
                              "start": 110,
                              "end": 113,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 114,
                      "end": 222,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 124,
                          "end": 152,
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 128,
                              "end": 151,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 148,
                                    "end": 151,
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 161,
                          "end": 216,
                          "argument": {
                            "type": "LogicalExpression",
                            "start": 168,
                            "end": 215,
                            "left": {
                              "type": "LogicalExpression",
                              "start": 168,
                              "end": 198,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 168,
                                "end": 181,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 168,
                                  "end": 173,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 168,
                                    "end": 171,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 172,
                                    "end": 173,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "start": 177,
                                  "end": 181,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 185,
                                "end": 198,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 185,
                                  "end": 190,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 185,
                                    "end": 188,
                                    "decorators": [],
                                    "name": "dis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 189,
                                    "end": 190,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "!=",
                                "right": {
                                  "type": "Literal",
                                  "start": 194,
                                  "end": 198,
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            },
                            "operator": "&&",
                            "right": {
                              "type": "BinaryExpression",
                              "start": 202,
                              "end": 215,
                              "left": {
                                "type": "MemberExpression",
                                "start": 202,
                                "end": 207,
                                "object": {
                                  "type": "Identifier",
                                  "start": 202,
                                  "end": 205,
                                  "decorators": [],
                                  "name": "dis",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 206,
                                  "end": 207,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "!=",
                              "right": {
                                "type": "Literal",
                                "start": 211,
                                "end": 215,
                                "value": null,
                                "raw": "null"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
