__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 285,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 35,
        "decorators": [],
        "name": "alert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 115,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 68,
            "decorators": [],
            "name": "parameterFn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 71,
            "end": 115,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 84,
                          "decorators": [],
                          "name": "store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 84,
                          "end": 91,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
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
              "type": "CallExpression",
              "start": 97,
              "end": 115,
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 103,
                  "end": 114,
                  "object": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 114,
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 218,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 136,
            "decorators": [],
            "name": "brokenFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 218,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 149,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 148,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 148,
                    "decorators": [],
                    "name": "OwnProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                    "typeParameters": null,
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 158,
                                      "end": 166,
                                      "decorators": [],
                                      "name": "dispatch",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 166,
                                      "end": 174,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 168,
                                        "end": 174
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 200,
              "end": 218,
              "expression": true,
              "async": false,
              "typeParameters": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 219,
      "end": 285,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 285,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 232,
            "end": 285,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 237,
              "decorators": [],
              "name": "Form3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 240,
              "end": 285,
              "callee": {
                "type": "CallExpression",
                "start": 240,
                "end": 267,
                "callee": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 254,
                  "decorators": [],
                  "name": "brokenFunction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 266,
                    "decorators": [],
                    "name": "parameterFn",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 274,
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 276,
                        "end": 283,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
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
