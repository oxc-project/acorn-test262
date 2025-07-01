__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mappy",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 21,
                "end": 28
              },
              "start": 21,
              "end": 30
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 30
          }
        ],
        "start": 10,
        "end": 31
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 38
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "typeArguments": null,
            "start": 48,
            "end": 49
          },
          "start": 42,
          "end": 49
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "typeArguments": null,
          "start": 53,
          "end": 54
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeArguments": null,
            "start": 57,
            "end": 58
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeArguments": null,
            "start": 59,
            "end": 60
          },
          "start": 57,
          "end": 61
        },
        "optional": false,
        "readonly": null,
        "start": 34,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mappy",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 86
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              },
              "start": 87,
              "end": 95
            }
          ],
          "start": 86,
          "end": 96
        },
        "start": 81,
        "end": 96
      },
      "declare": false,
      "start": 65,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doArrayStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 128
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 132,
                "end": 139
              },
              "start": 132,
              "end": 141
            },
            "start": 130,
            "end": 141
          },
          "start": 129,
          "end": 141
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 144,
          "end": 148
        },
        "start": 142,
        "end": 148
      },
      "body": null,
      "expression": false,
      "start": 99,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 175
                },
                "typeArguments": null,
                "start": 167,
                "end": 175
              },
              "start": 165,
              "end": 175
            },
            "start": 164,
            "end": 175
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 175
        }
      ],
      "declare": true,
      "start": 150,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doArrayStuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 189
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          }
        ],
        "optional": false,
        "start": 177,
        "end": 192
      },
      "directive": null,
      "start": 177,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
}
```
