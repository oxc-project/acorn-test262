__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 64,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Mappy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 34,
        "end": 63,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 42,
          "end": 49,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 48,
            "end": 49,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 53,
          "end": 54,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 57,
          "end": 61,
          "indexType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 57,
            "end": 58,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "NotArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 81,
        "end": 96,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 81,
          "end": 86,
          "decorators": [],
          "name": "Mappy",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 99,
      "end": 149,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 128,
        "decorators": [],
        "name": "doArrayStuff",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 129,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 142,
        "end": 148,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 144,
          "end": 148
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 175,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 175,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 175,
                  "decorators": [],
                  "name": "NotArray",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 177,
      "end": 193,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 192,
        "arguments": [
          {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 189,
          "decorators": [],
          "name": "doArrayStuff",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
