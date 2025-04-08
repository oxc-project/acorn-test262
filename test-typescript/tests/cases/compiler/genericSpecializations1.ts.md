__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 375,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
        "start": 18,
        "end": 113,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 40,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 28,
                  "end": 29,
                  "name": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
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
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 35,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 35,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
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
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ClassDeclaration",
      "start": 115,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 130,
        "name": "IntFooBad",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 174,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 200,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 198,
                    "argument": {
                      "type": "Literal",
                      "start": 193,
                      "end": 197,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 175,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 177,
                  "end": 183
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 142,
          "end": 154,
          "expression": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 146,
            "end": 154,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 147,
                "end": 153
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 220,
        "name": "StringFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 245,
        "end": 292,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 251,
            "end": 290,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 254,
              "end": 290,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 255,
                  "end": 264,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 274,
                "end": 290,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 276,
                    "end": 288,
                    "argument": {
                      "type": "Literal",
                      "start": 283,
                      "end": 287,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 265,
                "end": 273,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 267,
                  "end": 273
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 232,
          "end": 244,
          "expression": {
            "type": "Identifier",
            "start": 232,
            "end": 236,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 236,
            "end": 244,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 237,
                "end": 243
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 310,
        "name": "StringFoo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 335,
        "end": 375,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 341,
            "end": 373,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 344,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 344,
              "end": 373,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 348,
                  "end": 352,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 349,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 351,
                      "end": 352,
                      "typeName": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
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
              "body": {
                "type": "BlockStatement",
                "start": 357,
                "end": 373,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 359,
                    "end": 371,
                    "argument": {
                      "type": "Literal",
                      "start": 366,
                      "end": 370,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 344,
                "end": 347,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 345,
                    "end": 346,
                    "name": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 353,
                "end": 356,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 355,
                  "end": 356,
                  "typeName": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 322,
          "end": 334,
          "expression": {
            "type": "Identifier",
            "start": 322,
            "end": 326,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 326,
            "end": 334,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
