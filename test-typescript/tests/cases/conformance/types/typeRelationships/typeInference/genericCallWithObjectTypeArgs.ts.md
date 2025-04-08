__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": "private"
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
      "type": "ClassDeclaration",
      "start": 36,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "x",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": "private"
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
      "type": "ClassDeclaration",
      "start": 72,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 94,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "x",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 121,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 118,
                "end": 121,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
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
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 123,
          "end": 131,
          "name": "t2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 131,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 143,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 147,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 147,
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 153,
            "end": 162,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "name": "x",
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 175,
            "end": 185,
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 180,
              "end": 183,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 181,
                  "end": 182,
                  "typeName": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 196,
            "end": 206,
            "callee": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 201,
              "end": 204,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 203,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 227,
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 222,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 224,
                "end": 226,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "type": "VariableDeclaration",
      "start": 238,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 247,
            "end": 258,
            "callee": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 251,
                "end": 253,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 255,
                "end": 257,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
