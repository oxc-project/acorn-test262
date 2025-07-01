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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 70
          }
        ],
        "start": 54,
        "end": 72
      },
      "declare": false,
      "start": 32,
      "end": 72
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
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
            "start": 78,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 82
        }
      ],
      "declare": false,
      "start": 74,
      "end": 83
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "start": 89,
              "end": 92
            },
            "start": 88,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 92
        }
      ],
      "declare": false,
      "start": 84,
      "end": 93
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
              },
              "start": 99,
              "end": 104
            },
            "start": 98,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 104
        }
      ],
      "declare": false,
      "start": 94,
      "end": 105
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                            "start": 121,
                            "end": 127
                          },
                          "start": 119,
                          "end": 127
                        },
                        "start": 118,
                        "end": 127
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 131
                        },
                        "typeArguments": null,
                        "start": 130,
                        "end": 131
                      },
                      "start": 128,
                      "end": 131
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 132
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 136,
                            "end": 142
                          },
                          "start": 134,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 146
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 146
                      },
                      "start": 143,
                      "end": 146
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 132,
                    "end": 147
                  }
                ],
                "start": 115,
                "end": 149
              },
              "start": 113,
              "end": 149
            },
            "start": 111,
            "end": 149
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 158
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 160,
                  "end": 161
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 164
              }
            ],
            "start": 152,
            "end": 166
          },
          "definite": false,
          "start": 111,
          "end": 166
        }
      ],
      "declare": false,
      "start": 107,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 214
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 219,
              "end": 223
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 225,
                "end": 226
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 225,
              "end": 229
            }
          ],
          "start": 217,
          "end": 231
        },
        "start": 212,
        "end": 231
      },
      "directive": null,
      "start": 212,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 260
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 265,
              "end": 269
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 271,
                "end": 272
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 271,
              "end": 275
            }
          ],
          "start": 263,
          "end": 277
        },
        "start": 258,
        "end": 277
      },
      "directive": null,
      "start": 258,
      "end": 278
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 324
}
```
