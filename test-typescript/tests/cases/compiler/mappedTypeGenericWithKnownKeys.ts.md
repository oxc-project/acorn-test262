__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 303,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 303,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 303,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 175,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 119,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 122,
                  "end": 175,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 122,
                    "end": 124,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 128,
                    "end": 175,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 134,
                      "end": 175,
                      "params": [
                        {
                          "type": "TSUnionType",
                          "start": 135,
                          "end": 166,
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "start": 135,
                              "end": 146,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 141,
                                "end": 146,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 141,
                                  "end": 146,
                                  "decorators": [],
                                  "name": "Shape",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 149,
                              "end": 166,
                              "literal": {
                                "type": "Literal",
                                "start": 149,
                                "end": 166,
                                "raw": "\"knownLiteralKey\"",
                                "value": "knownLiteralKey"
                              }
                            }
                          ]
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 168,
                          "end": 174
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 134,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 182,
            "end": 206,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 182,
              "end": 205,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 182,
                "end": 201,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 185,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 201,
                  "decorators": [],
                  "name": "knownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 204,
                "end": 205,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 211,
            "end": 224,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 211,
              "end": 223,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 211,
                "end": 219,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 214,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 222,
                "end": 223,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 230,
            "end": 256,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 230,
              "end": 255,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 230,
                "end": 251,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 233,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 251,
                  "decorators": [],
                  "name": "unknownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 254,
                "end": 255,
                "raw": "3",
                "value": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 292,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 270,
              "end": 291,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 270,
                "end": 287,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 273,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "TSAsExpression",
                  "start": 274,
                  "end": 286,
                  "expression": {
                    "type": "Literal",
                    "start": 274,
                    "end": 276,
                    "raw": "''",
                    "value": ""
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 290,
                "end": 291,
                "raw": "4",
                "value": 4
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 33,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 84,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 84,
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 102,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 102,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 91,
              "end": 102,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 102,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 102,
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 70,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 70,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 54,
                "end": 70,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 54,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
