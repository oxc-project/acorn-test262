__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 101
      },
      "typeParameters": null,
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
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "start": 105,
            "end": 114
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 119,
            "end": 125
          },
          "start": 116,
          "end": 125
        },
        "start": 104,
        "end": 125
      },
      "declare": false,
      "start": 95,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 140,
                "end": 143
              },
              "start": 138,
              "end": 143
            },
            "start": 137,
            "end": 143
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 148,
            "end": 151
          },
          "start": 145,
          "end": 151
        },
        "start": 136,
        "end": 151
      },
      "declare": false,
      "start": 127,
      "end": 152
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
            "name": "fg",
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
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "typeArguments": null,
                    "start": 162,
                    "end": 163
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "typeArguments": null,
                    "start": 166,
                    "end": 167
                  }
                ],
                "start": 162,
                "end": 167
              },
              "start": 160,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": false,
      "start": 154,
      "end": 168
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
            "name": "gf",
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
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    "typeArguments": null,
                    "start": 177,
                    "end": 178
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "typeArguments": null,
                    "start": 181,
                    "end": 182
                  }
                ],
                "start": 177,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "start": 173,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 182
        }
      ],
      "declare": false,
      "start": 169,
      "end": 183
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 190
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fg",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 196,
                "end": 201
              }
            ],
            "optional": false,
            "start": 193,
            "end": 202
          },
          "definite": false,
          "start": 189,
          "end": 202
        }
      ],
      "declare": false,
      "start": 185,
      "end": 203
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              },
              "start": 209,
              "end": 217
            },
            "start": 208,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 217
        }
      ],
      "declare": false,
      "start": 204,
      "end": 218
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 225
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "gf",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 230
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 231,
                "end": 236
              }
            ],
            "optional": false,
            "start": 228,
            "end": 237
          },
          "definite": false,
          "start": 224,
          "end": 237
        }
      ],
      "declare": false,
      "start": 220,
      "end": 238
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 246,
                "end": 249
              },
              "start": 244,
              "end": 249
            },
            "start": 243,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 243,
          "end": 249
        }
      ],
      "declare": false,
      "start": 239,
      "end": 250
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 250
}
```
