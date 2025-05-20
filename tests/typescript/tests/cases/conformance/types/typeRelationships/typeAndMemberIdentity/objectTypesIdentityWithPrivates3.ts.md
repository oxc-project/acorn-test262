__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 16,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 29,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 65,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
      "start": 69,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 77,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 88,
        "end": 92,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 89,
            "end": 91,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 89,
              "end": 91,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 119,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 119,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 115,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 118,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 118,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 115,
                  "decorators": [],
                  "name": "C1",
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
      "type": "ExpressionStatement",
      "start": 121,
      "end": 128,
      "directive": null,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 121,
        "end": 127,
        "expression": {
          "type": "Identifier",
          "start": 125,
          "end": 127,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 124,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 275,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 214,
            "end": 227,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
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
              "start": 223,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 226,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 202,
        "end": 204,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 204,
        "end": 207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 205,
            "end": 206,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
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
      "start": 277,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 301,
        "end": 311,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 307,
            "end": 309,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 308,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 285,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 294,
        "end": 296,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 296,
        "end": 300,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 297,
            "end": 299,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 327,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 327,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 323,
                  "end": 327,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 326,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 326,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 323,
                  "decorators": [],
                  "name": "C3",
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
      "type": "ExpressionStatement",
      "start": 329,
      "end": 336,
      "directive": null,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 329,
        "end": 335,
        "expression": {
          "type": "Identifier",
          "start": 333,
          "end": 335,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 330,
          "end": 332,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "decorators": [],
            "name": "C4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
