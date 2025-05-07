__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 95,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "decorators": [],
              "name": "takesArgOfT",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 43,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 54,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 54,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "decorators": [],
                  "name": "Alpha",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 60,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 76,
              "decorators": [],
              "name": "makeBetaOfNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 92,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "decorators": [],
                  "name": "Beta",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Alpha",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 96,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 134,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 122,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "decorators": [],
            "name": "Alpha",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Beta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 160,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 160,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 152,
                  "decorators": [],
                  "name": "Alpha",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 162,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 178,
            "decorators": [],
            "name": "betaOfNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 181,
            "end": 205,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 181,
              "end": 203,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 187,
                "end": 203,
                "decorators": [],
                "name": "makeBetaOfNumber",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "ExpressionStatement",
      "start": 207,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 207,
        "end": 234,
        "arguments": [
          {
            "type": "Literal",
            "start": 232,
            "end": 233,
            "raw": "5",
            "value": 5,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 207,
          "end": 231,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 207,
            "end": 219,
            "decorators": [],
            "name": "betaOfNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 231,
            "decorators": [],
            "name": "takesArgOfT",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
