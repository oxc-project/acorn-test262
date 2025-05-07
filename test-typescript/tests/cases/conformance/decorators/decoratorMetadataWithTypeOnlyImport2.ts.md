__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "body": {
          "type": "TSModuleBlock",
          "start": 26,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 30,
              "end": 53,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 53,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 51,
                  "end": 53,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 50,
                  "decorators": [],
                  "name": "Service",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
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
          "end": 25,
          "decorators": [],
          "name": "Services",
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
  "end": 138,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 42,
        "raw": "'./services'",
        "value": "./services",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "Services",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "Services",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 73,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
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
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 82,
        "end": 138,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 93,
          "end": 138,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 97,
              "end": 136,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 97,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 98,
                    "end": 109,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 107,
                      "decorators": [],
                      "name": "decorator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 117,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 135,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 119,
                    "end": 135,
                    "left": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 127,
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 135,
                      "decorators": [],
                      "name": "Service",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "decorators": [],
          "name": "Main",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
