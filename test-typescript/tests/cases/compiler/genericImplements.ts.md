__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 14,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 12,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "EmptyStatement",
      "start": 14,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "EmptyStatement",
      "start": 30,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 72,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 50,
            "end": 70,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 51,
              "end": 64,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 52,
                  "end": 63,
                  "name": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
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
      "start": 103,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 124,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 173,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 173,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 173,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 154,
                    "end": 171,
                    "argument": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 170,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 133,
                "end": 146,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 134,
                    "end": 145,
                    "name": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 151,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 150,
                  "end": 151,
                  "typeName": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
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
          "start": 122,
          "end": 123,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 276,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 274,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 274,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 274,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 255,
                    "end": 272,
                    "argument": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 271,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 234,
                "end": 247,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 235,
                    "end": 246,
                    "name": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 245,
                      "end": 246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 249,
                "end": 252,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
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
          "start": 225,
          "end": 226,
          "expression": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 307,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 314,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 328,
        "end": 367,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 334,
            "end": 365,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 335,
              "end": 365,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 346,
                    "end": 363,
                    "argument": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 362,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 335,
                "end": 338,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 336,
                    "end": 337,
                    "name": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
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
                "start": 340,
                "end": 343,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 342,
                  "end": 343,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
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
          "start": 326,
          "end": 327,
          "expression": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
