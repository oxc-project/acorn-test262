__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Alpha",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 95,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 55,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "name": "takesArgOfT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 43,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "T",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "name": "Alpha",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 54,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 60,
            "end": 93,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 76,
              "name": "makeBetaOfNumber",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "name": "Beta",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 92,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Beta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 122,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "name": "Alpha",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 127,
            "end": 130,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "T",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 134,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 160,
            "name": "alpha",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 152,
                  "name": "Alpha",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 152,
                  "end": 160,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 153,
                      "end": 159
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 178,
            "name": "betaOfNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 181,
            "end": 205,
            "callee": {
              "type": "MemberExpression",
              "start": 181,
              "end": 203,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "name": "alpha",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 187,
                "end": 203,
                "name": "makeBetaOfNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 235,
      "expression": {
        "type": "CallExpression",
        "start": 207,
        "end": 234,
        "callee": {
          "type": "MemberExpression",
          "start": 207,
          "end": 231,
          "object": {
            "type": "Identifier",
            "start": 207,
            "end": 219,
            "name": "betaOfNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 231,
            "name": "takesArgOfT",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 232,
            "end": 233,
            "value": 5,
            "raw": "5"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
