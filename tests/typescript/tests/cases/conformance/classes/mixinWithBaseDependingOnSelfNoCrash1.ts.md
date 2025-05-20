__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 333,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 90,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 79,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 86,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "Parent",
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
      "start": 92,
      "end": 147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 147,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 114,
        "decorators": [],
        "name": "BaseItem",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 131,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 131,
        "end": 144,
        "params": [
          {
            "type": "TSTypeQuery",
            "start": 132,
            "end": 143,
            "exprName": {
              "type": "Identifier",
              "start": 139,
              "end": 143,
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 149,
      "end": 260,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 185,
        "decorators": [],
        "name": "ClientDocumentMixin",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 253,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 253,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 244,
              "end": 253,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 244,
                "end": 253,
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 254,
        "end": 259,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 256,
          "end": 259
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 185,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 234,
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "start": 207,
              "end": 234,
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 212,
                  "end": 226,
                  "argument": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 219,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 219,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 221,
                      "end": 226,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 221,
                        "end": 224
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 228,
                "end": 234,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 231,
                  "end": 234
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 198,
              "decorators": [],
              "name": "BaseClass",
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
      "start": 262,
      "end": 321,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 319,
        "end": 321,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 280,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 289,
        "end": 318,
        "arguments": [
          {
            "type": "Identifier",
            "start": 309,
            "end": 317,
            "decorators": [],
            "name": "BaseItem",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 289,
          "end": 308,
          "decorators": [],
          "name": "ClientDocumentMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 323,
      "end": 333,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
