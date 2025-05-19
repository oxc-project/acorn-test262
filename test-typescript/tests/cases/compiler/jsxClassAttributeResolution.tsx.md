__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 13,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 20,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "JSXElement",
              "start": 30,
              "end": 41,
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 35,
                "end": 41,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 37,
                  "end": 40,
                  "name": "App"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 30,
                "end": 35,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 31,
                  "end": 34,
                  "name": "App"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "end": 155,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 55,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "ref",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
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
        "end": 39,
        "decorators": [],
        "name": "IntrinsicClassAttributesAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
      "type": "TSModuleDeclaration",
      "start": 58,
      "end": 155,
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 155,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 86,
            "end": 153,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 115,
              "decorators": [],
              "name": "IntrinsicClassAttributes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 153,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 152,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 150,
                "decorators": [],
                "name": "IntrinsicClassAttributesAlias",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 115,
              "end": 118,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 116,
                  "end": 117,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 12,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "raw": "'./'",
        "value": "./"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
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
  "end": 12,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "raw": "'./'",
        "value": "./"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
