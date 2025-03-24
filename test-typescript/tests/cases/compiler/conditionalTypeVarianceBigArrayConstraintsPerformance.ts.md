__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 224,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 45,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 55,
        "name": "Stuff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 65,
        "end": 151,
        "checkType": {
          "type": "TSTypeReference",
          "start": 65,
          "end": 66,
          "typeName": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 75,
          "end": 102,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 81,
            "end": 102,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 81,
              "end": 102,
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 85,
                "end": 102,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 113,
          "end": 137,
          "objectType": {
            "type": "TSTypeReference",
            "start": 113,
            "end": 134,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 113,
              "end": 134,
              "left": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 117,
                "end": 134,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 135,
            "end": 136,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 148,
          "end": 151
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "F",
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
          "start": 171,
          "end": 183,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 183,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 183,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
                "name": "Stuff",
                "typeAnnotation": null,
                "decorators": [],
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
          "start": 185,
          "end": 197,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 194,
                "name": "Stuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 194,
                "end": 197,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "name": "U",
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
        "start": 199,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 213,
            "expression": {
              "type": "AssignmentExpression",
              "start": 205,
              "end": 212,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 212,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "name": "U",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
