__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 334,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 79,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 90,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "name": "Parent",
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 114,
        "name": "BaseItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 131,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 147,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
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
              "name": "Item",
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
      "type": "TSDeclareFunction",
      "start": 149,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 185,
        "name": "ClientDocumentMixin",
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
          "start": 238,
          "end": 253,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 253,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 244,
              "end": 253,
              "typeName": {
                "type": "Identifier",
                "start": 244,
                "end": 253,
                "name": "BaseClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 185,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 198,
              "name": "BaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 207,
              "end": 234,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 212,
                  "end": 226,
                  "argument": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 219,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 254,
        "end": 259,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 256,
          "end": 259
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 262,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 280,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 289,
        "end": 318,
        "callee": {
          "type": "Identifier",
          "start": 289,
          "end": 308,
          "name": "ClientDocumentMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 309,
            "end": 317,
            "name": "BaseItem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 319,
        "end": 321,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 323,
      "end": 333,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
