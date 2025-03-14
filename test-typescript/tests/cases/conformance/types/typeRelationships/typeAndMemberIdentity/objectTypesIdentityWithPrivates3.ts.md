__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 420,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 17,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "decorators": [],
        "name": "T1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 33,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "decorators": [],
        "name": "T2",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 66,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "x",
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
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
      "start": 70,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 102,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "y",
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
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 89,
        "end": 93,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 90,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 90,
              "end": 92,
              "decorators": [],
              "name": "T1",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 120,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 120,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 120,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 119,
                        "decorators": [],
                        "name": "T2",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "C1",
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
      "type": "ExpressionStatement",
      "start": 122,
      "end": 129,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 122,
        "end": 128,
        "expression": {
          "type": "Identifier",
          "start": 126,
          "end": 128,
          "decorators": [],
          "name": "c1",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 125,
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 197,
      "end": 276,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 228,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
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
        "start": 203,
        "end": 205,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
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
      "start": 278,
      "end": 312,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 302,
        "end": 312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 308,
            "end": 310,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "y",
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
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 297,
        "end": 301,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 298,
            "end": 300,
            "typeName": {
              "type": "Identifier",
              "start": 298,
              "end": 300,
              "decorators": [],
              "name": "T1",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 328,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 328,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 324,
                  "end": 328,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 325,
                      "end": 327,
                      "typeName": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 327,
                        "decorators": [],
                        "name": "T2",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 324,
                  "decorators": [],
                  "name": "C3",
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
      "type": "ExpressionStatement",
      "start": 330,
      "end": 337,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 330,
        "end": 336,
        "expression": {
          "type": "Identifier",
          "start": 334,
          "end": 336,
          "decorators": [],
          "name": "c3",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 331,
          "end": 333,
          "typeName": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "decorators": [],
            "name": "C4",
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
