typeParameterAsTypeArgument.ts
```json
{
  "type": "Program",
  "start": 107,
  "end": 457,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 187,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 144,
            "end": 160,
            "expression": {
              "type": "CallExpression",
              "start": 144,
              "end": 159,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 147,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 148,
                    "end": 149,
                    "typeName": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 165,
            "end": 185,
            "argument": {
              "type": "NewExpression",
              "start": 172,
              "end": 184,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 177,
                "end": 182,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 181,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 130,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 132,
          "end": 136,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 133,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 121,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 124,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 216,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 216,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 214,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 255,
      "body": {
        "type": "TSInterfaceBody",
        "start": 236,
        "end": 255,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 242,
            "end": 253,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 252,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 252,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 229,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 231,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 234,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
