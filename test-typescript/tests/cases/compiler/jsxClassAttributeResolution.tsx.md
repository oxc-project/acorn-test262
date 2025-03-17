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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "App",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 13,
      "end": 42,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 20,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 30,
              "end": 41,
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
              },
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
              "children": []
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 39,
        "name": "IntrinsicClassAttributesAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 57,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 55,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "ref",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 58,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 155,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 86,
            "end": 153,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 115,
              "name": "IntrinsicClassAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
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
              "type": "TSTypeReference",
              "start": 121,
              "end": 153,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 150,
                "name": "IntrinsicClassAttributesAlias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 153,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "'./'"
      },
      "attributes": [],
      "importKind": "value"
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
  "end": 13,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "'./'"
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
