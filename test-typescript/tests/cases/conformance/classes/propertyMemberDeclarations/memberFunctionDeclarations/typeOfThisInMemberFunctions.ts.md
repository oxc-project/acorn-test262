__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 49,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 43,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 42,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 38,
                          "end": 42
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 78,
                    "end": 92,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 82,
                        "end": 91,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 84,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 215,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 215,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 164,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 158,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 157,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 153,
                          "end": 157
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 213,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 213,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 193,
                    "end": 207,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 197,
                        "end": 206,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 202,
                          "end": 206
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "type": "ClassDeclaration",
      "start": 217,
      "end": 343,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 343,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 252,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 251,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 257,
            "end": 292,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 292,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 273,
                    "end": 286,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 277,
                        "end": 285,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 281,
                          "end": 285
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 341,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 308,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 308,
              "end": 341,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 341,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 321,
                    "end": 335,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 325,
                        "end": 334,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 327,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 330,
                          "end": 334
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 224,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 225,
            "end": 239,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 239,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 239,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
