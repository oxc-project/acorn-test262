__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 250,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 95,
      "end": 126,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 104,
        "end": 125,
        "params": [
          {
            "type": "Identifier",
            "start": 105,
            "end": 114,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 116,
          "end": 125,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 119,
            "end": 125
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 136,
        "end": 151,
        "params": [
          {
            "type": "Identifier",
            "start": 137,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 143,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 140,
                "end": 143
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 145,
          "end": 151,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 148,
            "end": 151
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 167,
            "decorators": [],
            "name": "fg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 167,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 162,
                "end": 167,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 162,
                    "end": 163,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 166,
                    "end": 167,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 182,
            "decorators": [],
            "name": "gf",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 182,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 177,
                "end": 182,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 177,
                    "end": 178,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 181,
                    "end": 182,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 193,
            "end": 202,
            "arguments": [
              {
                "type": "Literal",
                "start": 196,
                "end": 201,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 193,
              "end": 195,
              "decorators": [],
              "name": "fg",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 217,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 225,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 237,
            "arguments": [
              {
                "type": "Literal",
                "start": 231,
                "end": 236,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 228,
              "end": 230,
              "decorators": [],
              "name": "gf",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 249,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 249,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 246,
                "end": 249
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
