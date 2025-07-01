__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fold",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 26,
                  "end": 27
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 25,
              "end": 31
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 36,
                      "end": 41
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 42,
                            "end": 43
                          },
                          "typeArguments": null,
                          "start": 42,
                          "end": 43
                        }
                      ],
                      "start": 41,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 34,
                  "end": 44
                },
                "start": 32,
                "end": 44
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 59,
                              "end": 60
                            },
                            "typeArguments": null,
                            "start": 59,
                            "end": 60
                          },
                          "start": 57,
                          "end": 60
                        },
                        "start": 56,
                        "end": 60
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 65,
                              "end": 66
                            },
                            "typeArguments": null,
                            "start": 65,
                            "end": 66
                          },
                          "start": 63,
                          "end": 66
                        },
                        "start": 62,
                        "end": 66
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 72
                        },
                        "typeArguments": null,
                        "start": 71,
                        "end": 72
                      },
                      "start": 68,
                      "end": 72
                    },
                    "start": 55,
                    "end": 72
                  },
                  "start": 53,
                  "end": 72
                },
                "start": 46,
                "end": 72
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 82
                    },
                    "typeArguments": null,
                    "start": 81,
                    "end": 82
                  },
                  "start": 79,
                  "end": 82
                },
                "start": 74,
                "end": 82
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              },
              "start": 83,
              "end": 86
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 21,
            "end": 87
          }
        ],
        "start": 16,
        "end": 89
      },
      "declare": false,
      "start": 0,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 107
                },
                "typeArguments": null,
                "start": 102,
                "end": 107
              },
              "start": 100,
              "end": 107
            },
            "start": 95,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 107
        }
      ],
      "declare": false,
      "start": 91,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 110,
        "end": 122
      },
      "directive": null,
      "start": 110,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 141
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 147,
            "end": 151
          }
        ],
        "optional": false,
        "start": 136,
        "end": 152
      },
      "directive": null,
      "start": 136,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 166,
          "end": 176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 177,
            "end": 181
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 183,
            "end": 187
          }
        ],
        "optional": false,
        "start": 166,
        "end": 188
      },
      "directive": null,
      "start": 166,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 202,
          "end": 212
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 213,
            "end": 217
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 219,
            "end": 223
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 225,
            "end": 229
          }
        ],
        "optional": false,
        "start": 202,
        "end": 230
      },
      "directive": null,
      "start": 202,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
