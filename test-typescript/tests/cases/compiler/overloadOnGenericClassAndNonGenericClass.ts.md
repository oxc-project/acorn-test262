overloadOnGenericClassAndNonGenericClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 14,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 12,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 63,
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
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
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
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 52,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 54,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
      "type": "ClassDeclaration",
      "start": 66,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 77,
            "end": 87,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
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
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "X1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 113,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 111,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
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
              "start": 102,
              "end": 110,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 104,
                "end": 110
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
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "X2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 114,
      "end": 135,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 130,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 130,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 130,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 130,
                "decorators": [],
                "name": "X1",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 134,
          "typeName": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 136,
      "end": 162,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 146,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 150,
          "end": 157,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 151,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 153,
              "end": 157,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 154,
                "end": 157,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 158,
        "end": 161,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 160,
          "end": 161,
          "typeName": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
      "start": 163,
      "end": 185,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 185,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 176,
        "end": 181,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 178,
          "end": 181
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 204,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 196,
                  "end": 204,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 197,
                      "end": 203
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "X",
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
      "type": "VariableDeclaration",
      "start": 207,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 213,
            "decorators": [],
            "name": "t3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 216,
            "end": 221,
            "arguments": [
              {
                "type": "Identifier",
                "start": 218,
                "end": 220,
                "decorators": [],
                "name": "xs",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "f",
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
      "start": 223,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 232,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "A",
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
    }
  ],
  "sourceType": "script"
}
```
