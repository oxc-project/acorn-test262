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
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "takesArgOfT",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 36
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
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
                      "start": 42,
                      "end": 43
                    },
                    "typeArguments": null,
                    "start": 42,
                    "end": 43
                  },
                  "start": 40,
                  "end": 43
                },
                "start": 37,
                "end": 43
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alpha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 51
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
                        "start": 52,
                        "end": 53
                      },
                      "typeArguments": null,
                      "start": 52,
                      "end": 53
                    }
                  ],
                  "start": 51,
                  "end": 54
                },
                "start": 46,
                "end": 54
              },
              "start": 44,
              "end": 54
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 55
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeBetaOfNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 76
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Beta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ],
                  "start": 84,
                  "end": 92
                },
                "start": 80,
                "end": 92
              },
              "start": 78,
              "end": 92
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 60,
            "end": 93
          }
        ],
        "start": 19,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Beta",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          }
        ],
        "start": 110,
        "end": 113
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Alpha",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
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
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              }
            ],
            "start": 127,
            "end": 130
          },
          "start": 122,
          "end": 130
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 131,
        "end": 134
      },
      "declare": false,
      "start": 96,
      "end": 134
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
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alpha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 152
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 153,
                      "end": 159
                    }
                  ],
                  "start": 152,
                  "end": 160
                },
                "start": 147,
                "end": 160
              },
              "start": 145,
              "end": 160
            },
            "start": 140,
            "end": 160
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 160
        }
      ],
      "declare": false,
      "start": 136,
      "end": 161
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
            "name": "betaOfNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 186
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "makeBetaOfNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 203
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 203
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 181,
            "end": 205
          },
          "definite": false,
          "start": 166,
          "end": 205
        }
      ],
      "declare": false,
      "start": 162,
      "end": 206
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
            "name": "betaOfNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "takesArgOfT",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 231
          },
          "optional": false,
          "computed": false,
          "start": 207,
          "end": 231
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 232,
            "end": 233
          }
        ],
        "optional": false,
        "start": 207,
        "end": 234
      },
      "directive": null,
      "start": 207,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 235
}
```
