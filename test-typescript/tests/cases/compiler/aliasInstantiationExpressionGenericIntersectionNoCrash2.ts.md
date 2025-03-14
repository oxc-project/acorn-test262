__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Class",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 64,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 63,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 62,
          "end": 63,
          "typeName": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 104,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 82,
        "decorators": [],
        "name": "ClassAlias",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 88,
        "end": 103,
        "exprName": {
          "type": "Identifier",
          "start": 95,
          "end": 100,
          "decorators": [],
          "name": "Class",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 100,
          "end": 103,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 101,
              "end": 102,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 117,
        "decorators": [],
        "name": "FnAlias",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 123,
        "end": 135,
        "exprName": {
          "type": "Identifier",
          "start": 130,
          "end": 132,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 132,
          "end": 135,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 133,
              "end": 134,
              "typeName": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 119,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
      "type": "TSTypeAliasDeclaration",
      "start": 138,
      "end": 179,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 146,
        "decorators": [],
        "name": "Wat",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 152,
        "end": 178,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 152,
            "end": 165,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 162,
              "end": 165,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 163,
                  "end": 164,
                  "typeName": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 152,
              "end": 162,
              "decorators": [],
              "name": "ClassAlias",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 168,
            "end": 178,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 175,
              "end": 178,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 176,
                  "end": 177,
                  "typeName": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "FnAlias",
              "optional": false
            }
          }
        ]
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
      "type": "VariableDeclaration",
      "start": 182,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 212,
            "decorators": [],
            "name": "wat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 212,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 212,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 205,
                      "end": 211
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 204,
                  "decorators": [],
                  "name": "Wat",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 233,
      "expression": {
        "type": "TSAsExpression",
        "start": 214,
        "end": 232,
        "expression": {
          "type": "Identifier",
          "start": 214,
          "end": 217,
          "decorators": [],
          "name": "wat",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 221,
          "end": 232,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 224,
            "end": 232,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "Wat",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
