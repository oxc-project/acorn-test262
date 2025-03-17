__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 24,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 24,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "T",
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 156,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 156,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 153,
                "end": 156
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
      "start": 158,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 166,
            "end": 177,
            "expression": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 171,
              "end": 177,
              "elementType": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 175,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 172,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 174,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 193,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 187,
              "end": 191,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 189,
                "end": 190,
                "raw": "0",
                "value": 0
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
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
