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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 28
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 45
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 55,
                        "end": 61
                      }
                    ],
                    "start": 46,
                    "end": 61
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  }
                ],
                "start": 45,
                "end": 67
              },
              "start": 39,
              "end": 67
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 67
          }
        ],
        "start": 28,
        "end": 68
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 75,
            "end": 78
          },
          "start": 69,
          "end": 78
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 92,
                  "end": 98
                }
              ],
              "start": 83,
              "end": 98
            },
            "start": 81,
            "end": 98
          },
          "start": 80,
          "end": 98
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "optional": false,
                "computed": true,
                "start": 106,
                "end": 115
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 118,
                "end": 120
              },
              "start": 106,
              "end": 120
            },
            "directive": null,
            "start": 106,
            "end": 121
          }
        ],
        "start": 100,
        "end": 132
      },
      "expression": false,
      "start": 16,
      "end": 132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 147
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 158,
                    "end": 164
                  },
                  "start": 158,
                  "end": 166
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 175,
                              "end": 181
                            },
                            "start": 173,
                            "end": 181
                          },
                          "start": 172,
                          "end": 181
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 184,
                              "end": 190
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 193,
                              "end": 199
                            }
                          ],
                          "start": 184,
                          "end": 199
                        },
                        "start": 182,
                        "end": 199
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 171,
                      "end": 199
                    }
                  ],
                  "start": 169,
                  "end": 201
                }
              ],
              "start": 158,
              "end": 201
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 201
          }
        ],
        "start": 147,
        "end": 202
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 211,
                "end": 212
              },
              "typeArguments": null,
              "start": 211,
              "end": 212
            },
            "start": 209,
            "end": 212
          },
          "start": 203,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 217,
                  "end": 223
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 226,
                  "end": 232
                }
              ],
              "start": 217,
              "end": 232
            },
            "start": 215,
            "end": 232
          },
          "start": 214,
          "end": 232
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 246
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "optional": false,
                "computed": true,
                "start": 240,
                "end": 249
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 252,
                "end": 253
              },
              "start": 240,
              "end": 253
            },
            "directive": null,
            "start": 240,
            "end": 254
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 274
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "optional": false,
                "computed": true,
                "start": 268,
                "end": 277
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 280,
                "end": 281
              },
              "start": 268,
              "end": 281
            },
            "directive": null,
            "start": 268,
            "end": 282
          }
        ],
        "start": 234,
        "end": 290
      },
      "expression": false,
      "start": 134,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 290
}
```
