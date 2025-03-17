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
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 35,
        "name": "alert",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 45,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 49,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 68,
            "name": "parameterFn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 71,
            "end": 115,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 92,
                "name": "props",
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
                          "name": "store",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 97,
              "end": 115,
              "callee": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "name": "alert",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 103,
                  "end": 114,
                  "object": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 108,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 114,
                    "name": "store",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 136,
            "name": "brokenFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 218,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 195,
                "name": "f",
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
                        "name": "p",
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
                                      "name": "dispatch",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                  "name": "OwnProps",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 200,
              "end": 218,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 212,
                  "name": "o",
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
                        "name": "OwnProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "OwnProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 232,
            "end": 285,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 237,
              "name": "Form3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "brokenFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 255,
                    "end": 266,
                    "name": "parameterFn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 274,
                        "name": "store",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 276,
                        "end": 283,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
