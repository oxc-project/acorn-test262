genericCallWithObjectTypeArgs.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 68,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
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
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
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
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 89,
            "end": 94,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
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
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 164,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 147,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
            "type": "ReturnStatement",
            "start": 153,
            "end": 162,
            "argument": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 115,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 121,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 123,
          "end": 131,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 131,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 175,
            "end": 185,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "X",
              "optional": false
            },
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 196,
            "end": 206,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "X",
              "optional": false
            },
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
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 227,
            "arguments": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 222,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 224,
                "end": 226,
                "decorators": [],
                "name": "d1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 247,
            "end": 258,
            "arguments": [
              {
                "type": "Identifier",
                "start": 251,
                "end": 253,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 255,
                "end": 257,
                "decorators": [],
                "name": "c1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
