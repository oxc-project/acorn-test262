__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 286,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 35,
        "decorators": [],
        "name": "alert",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 45,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 68,
            "decorators": [],
            "name": "parameterFn",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 71,
            "end": 115,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 97,
              "end": 115,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 103,
                  "end": 114,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 114,
                    "decorators": [],
                    "name": "store",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "decorators": [],
                "name": "alert",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 92,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 78,
                    "end": 92,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 79,
                        "end": 91,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 84,
                          "decorators": [],
                          "name": "store",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 91,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 136,
            "decorators": [],
            "name": "brokenFunction",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 218,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 200,
              "end": 218,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 212,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 212,
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 195,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 153,
                    "end": 195,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 186,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 155,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 157,
                            "end": 186,
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "start": 157,
                                "end": 175,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 158,
                                    "end": 174,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 158,
                                      "end": 166,
                                      "decorators": [],
                                      "name": "dispatch",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 166,
                                      "end": 174,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 168,
                                        "end": 174
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 178,
                                "end": 186,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 186,
                                  "decorators": [],
                                  "name": "OwnProps",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 191,
                        "end": 195
                      }
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 149,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 148,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 148,
                    "decorators": [],
                    "name": "OwnProps",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 285,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 285,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 232,
            "end": 285,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 237,
              "decorators": [],
              "name": "Form3",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 240,
              "end": 285,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 268,
                  "end": 284,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 269,
                      "end": 283,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 274,
                        "decorators": [],
                        "name": "store",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 276,
                        "end": 283,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "CallExpression",
                "start": 240,
                "end": 267,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 266,
                    "decorators": [],
                    "name": "parameterFn",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 254,
                  "decorators": [],
                  "name": "brokenFunction",
                  "optional": false
                },
                "optional": false
              },
              "optional": false
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
