__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 531,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 31,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
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
        "end": 10,
        "decorators": [],
        "name": "Base",
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
      "start": 34,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 83,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 81,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 74,
                "end": 80
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
        "start": 40,
        "end": 47,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 140,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 180,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 160,
            "end": 178,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 161,
                "end": 170,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 173,
                "end": 177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 177,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 153,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 181,
      "end": 256,
      "body": {
        "type": "TSInterfaceBody",
        "start": 229,
        "end": 256,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 235,
            "end": 254,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 236,
                "end": 245,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 237,
                  "end": 245,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 239,
                    "end": 245
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 253,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 253,
                  "decorators": [],
                  "name": "TBase",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 225,
          "end": 228,
          "expression": {
            "type": "Identifier",
            "start": 225,
            "end": 228,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "decorators": [],
        "name": "FooOf",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 215,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 211,
              "end": 215,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 215,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 202,
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 278,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 264,
                "end": 278,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 269,
                  "end": 278,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 270,
                      "end": 277,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 277,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 269,
                  "decorators": [],
                  "name": "FooOf",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 281,
            "end": 285,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 301,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 301,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 301,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 304,
            "end": 308,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 306,
              "end": 307,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
