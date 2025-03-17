__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Mappy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 21,
              "end": 30,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 21,
                "end": 28
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 34,
        "end": 63,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 37,
          "end": 49,
          "name": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 42,
            "end": 49,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 57,
          "end": 61,
          "objectType": {
            "type": "TSTypeReference",
            "start": 57,
            "end": 58,
            "typeName": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 42,
          "end": 49,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 48,
            "end": 49,
            "typeName": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "name": "NotArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 81,
        "end": 96,
        "typeName": {
          "type": "Identifier",
          "start": 81,
          "end": 86,
          "name": "Mappy",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 86,
          "end": 96,
          "params": [
            {
              "type": "TSArrayType",
              "start": 87,
              "end": 95,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 99,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 128,
        "name": "doArrayStuff",
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
          "start": 129,
          "end": 141,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 141,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 132,
              "end": 141,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 132,
                "end": 139
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 142,
        "end": 148,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 144,
          "end": 148
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 175,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 175,
                  "name": "NotArray",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 193,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 192,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 189,
          "name": "doArrayStuff",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
