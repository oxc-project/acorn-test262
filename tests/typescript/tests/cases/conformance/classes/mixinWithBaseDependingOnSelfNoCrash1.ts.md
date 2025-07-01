__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 86
          }
        ],
        "start": 79,
        "end": 87
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 88,
        "end": 90
      },
      "abstract": false,
      "declare": true,
      "start": 57,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 131
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "typeArguments": null,
            "start": 132,
            "end": 143
          }
        ],
        "start": 131,
        "end": 144
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 145,
        "end": 147
      },
      "abstract": false,
      "declare": true,
      "start": 92,
      "end": 147
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClientDocumentMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 185
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 198
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 219
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 221,
                        "end": 224
                      },
                      "start": 221,
                      "end": 226
                    },
                    "start": 219,
                    "end": 226
                  },
                  "value": null,
                  "start": 212,
                  "end": 226
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 231,
                  "end": 234
                },
                "start": 228,
                "end": 234
              },
              "start": 207,
              "end": 234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 189,
            "end": 234
          }
        ],
        "start": 185,
        "end": 237
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 253
              },
              "typeArguments": null,
              "start": 244,
              "end": 253
            },
            "start": 242,
            "end": 253
          },
          "start": 238,
          "end": 253
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 256,
          "end": 259
        },
        "start": 254,
        "end": 259
      },
      "body": null,
      "expression": false,
      "start": 149,
      "end": 260
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 280
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClientDocumentMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 308
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseItem",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 317
          }
        ],
        "optional": false,
        "start": 289,
        "end": 318
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 319,
        "end": 321
      },
      "abstract": false,
      "declare": true,
      "start": 262,
      "end": 321
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 323,
      "end": 333
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 333
}
```
