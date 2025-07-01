__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 28
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLAttributes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 59
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                },
                "declare": false,
                "start": 40,
                "end": 68
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 33,
              "end": 68
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 100
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
                },
                "declare": false,
                "start": 78,
                "end": 109
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 71,
              "end": 109
            }
          ],
          "start": 29,
          "end": 111
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 112
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./jsx",
        "raw": "\"./jsx\"",
        "start": 28,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 54
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 68
        },
        "importKind": "value",
        "start": 44,
        "end": 69
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 100
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 112
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 132
                },
                "typeArguments": null,
                "start": 121,
                "end": 132
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 101,
              "end": 132
            }
          ],
          "start": 100,
          "end": 133
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "start": 137,
            "end": 152
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 171
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 186
                  },
                  "start": 168,
                  "end": 186
                },
                "typeArguments": null,
                "start": 168,
                "end": 186
              },
              "start": 166,
              "end": 186
            },
            "start": 156,
            "end": 186
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 201
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 206
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 224
                    },
                    "start": 203,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 224
                },
                "start": 203,
                "end": 226
              },
              "start": 201,
              "end": 226
            },
            "value": null,
            "start": 190,
            "end": 226
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 230,
            "end": 233
          },
          "start": 228,
          "end": 233
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 234,
          "end": 245
        },
        "expression": false,
        "start": 78,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 71,
      "end": 245
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
