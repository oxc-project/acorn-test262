__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 111,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 111,
        "body": {
          "type": "TSModuleBlock",
          "start": 29,
          "end": 111,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 68,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 40,
                "end": 68,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 59,
                  "decorators": [],
                  "name": "HTMLAttributes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 71,
              "end": 109,
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 78,
                "end": 109,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 100,
                  "decorators": [],
                  "name": "ComponentChildren",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 28,
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 35,
        "raw": "\"./jsx\"",
        "value": "./jsx"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 69,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 44,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "start": 57,
          "end": 68,
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 245,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 78,
        "end": 245,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 234,
          "end": 245,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 87,
          "end": 100,
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 137,
            "end": 152,
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
              }
            }
          },
          {
            "type": "Identifier",
            "start": 156,
            "end": 186,
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 186,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 168,
                  "end": 186,
                  "left": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 186,
                    "decorators": [],
                    "name": "HTMLAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "RestElement",
            "start": 190,
            "end": 226,
            "argument": {
              "type": "Identifier",
              "start": 193,
              "end": 201,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 226,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 203,
                "end": 226,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 224,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 203,
                    "end": 224,
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 206,
                      "decorators": [],
                      "name": "JSX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 224,
                      "decorators": [],
                      "name": "ComponentChildren",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 228,
          "end": 233,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 230,
            "end": 233
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 100,
          "end": 133,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 101,
              "end": 132,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 132,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 132,
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 101,
                "end": 112,
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
