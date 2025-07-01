__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "alert",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 35
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "start": 36,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 47,
        "end": 49
      },
      "expression": false,
      "start": 21,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "parameterFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 68
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "store",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 84
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 85,
                            "end": 91
                          },
                          "start": 84,
                          "end": 91
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 79,
                        "end": 91
                      }
                    ],
                    "start": 78,
                    "end": 92
                  },
                  "start": 77,
                  "end": 92
                },
                "start": 72,
                "end": 92
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 108
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 114
                  },
                  "optional": false,
                  "computed": false,
                  "start": 103,
                  "end": 114
                }
              ],
              "optional": false,
              "start": 97,
              "end": 115
            },
            "id": null,
            "generator": false,
            "start": 71,
            "end": 115
          },
          "definite": false,
          "start": 57,
          "end": 115
        }
      ],
      "declare": false,
      "start": 51,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "brokenFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 136
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OwnProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 148
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 140,
                  "end": 148
                }
              ],
              "start": 139,
              "end": 149
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dispatch",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 158,
                                      "end": 166
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 168,
                                        "end": 174
                                      },
                                      "start": 166,
                                      "end": 174
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 158,
                                    "end": 174
                                  }
                                ],
                                "start": 157,
                                "end": 175
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OwnProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 186
                                },
                                "typeArguments": null,
                                "start": 178,
                                "end": 186
                              }
                            ],
                            "start": 157,
                            "end": 186
                          },
                          "start": 155,
                          "end": 186
                        },
                        "start": 154,
                        "end": 186
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 191,
                        "end": 195
                      },
                      "start": 188,
                      "end": 195
                    },
                    "start": 153,
                    "end": 195
                  },
                  "start": 151,
                  "end": 195
                },
                "start": 150,
                "end": 195
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 212
                    },
                    "start": 202,
                    "end": 212
                  },
                  "start": 201,
                  "end": 212
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
              },
              "id": null,
              "generator": false,
              "start": 200,
              "end": 218
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 218
          },
          "definite": false,
          "start": 122,
          "end": 218
        }
      ],
      "declare": false,
      "start": 116,
      "end": 218
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Form3",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 237
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "brokenFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 254
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parameterFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 266
                  }
                ],
                "optional": false,
                "start": 240,
                "end": 267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 274
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 276,
                        "end": 283
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 269,
                      "end": 283
                    }
                  ],
                  "start": 268,
                  "end": 284
                }
              ],
              "optional": false,
              "start": 240,
              "end": 285
            },
            "definite": false,
            "start": 232,
            "end": 285
          }
        ],
        "declare": false,
        "start": 226,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 219,
      "end": 285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 285
}
```
