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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 18,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
      "type": "ClassDeclaration",
      "start": 70,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 89,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 104,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "y",
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 120,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
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
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 197,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 205,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 276,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 215,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
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
      "type": "ClassDeclaration",
      "start": 278,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 302,
        "end": 312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 308,
            "end": 310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "y",
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 328,
            "name": "c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 324,
                  "name": "C3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
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
            "name": "C4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
