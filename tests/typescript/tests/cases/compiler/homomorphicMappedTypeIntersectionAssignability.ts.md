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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 16
          }
        ],
        "start": 10,
        "end": 17
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "weak",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 28,
                        "end": 32
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 28,
                      "end": 41
                    }
                  ],
                  "start": 26,
                  "end": 43
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 54
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 60
                        },
                        "typeArguments": null,
                        "start": 55,
                        "end": 60
                      }
                    ],
                    "start": 54,
                    "end": 61
                  },
                  "start": 46,
                  "end": 61
                },
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 70
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "ok",
                            "raw": "\"ok\"",
                            "start": 72,
                            "end": 76
                          },
                          "start": 72,
                          "end": 76
                        },
                        "start": 70,
                        "end": 76
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 66,
                      "end": 76
                    }
                  ],
                  "start": 64,
                  "end": 78
                }
              ],
              "start": 26,
              "end": 78
            },
            "start": 24,
            "end": 78
          },
          "start": 23,
          "end": 78
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 95
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 96,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 96,
                        "end": 101
                      },
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 110
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 112,
                                "end": 118
                              },
                              "start": 110,
                              "end": 118
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 106,
                            "end": 118
                          }
                        ],
                        "start": 104,
                        "end": 120
                      }
                    ],
                    "start": 96,
                    "end": 120
                  }
                ],
                "start": 95,
                "end": 121
              },
              "start": 87,
              "end": 121
            },
            "start": 85,
            "end": 121
          },
          "start": 84,
          "end": 121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 138
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 144
                        },
                        "typeArguments": null,
                        "start": 139,
                        "end": 144
                      }
                    ],
                    "start": 138,
                    "end": 145
                  },
                  "start": 130,
                  "end": 145
                },
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 154
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 156,
                          "end": 162
                        },
                        "start": 154,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 150,
                      "end": 162
                    }
                  ],
                  "start": 148,
                  "end": 164
                }
              ],
              "start": 130,
              "end": 164
            },
            "start": 128,
            "end": 164
          },
          "start": 127,
          "end": 164
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "start": 172,
              "end": 177
            },
            "directive": null,
            "start": 172,
            "end": 178
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "start": 192,
              "end": 197
            },
            "directive": null,
            "start": 192,
            "end": 198
          }
        ],
        "start": 166,
        "end": 220
      },
      "expression": false,
      "start": 0,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
