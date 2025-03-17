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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 25,
          "name": "Services",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 26,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 30,
              "end": 53,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 37,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 50,
                  "name": "Service",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 51,
                  "end": 53,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
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
  "end": 139,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "name": "Services",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "name": "Services",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 42,
        "value": "./services",
        "raw": "'./services'"
      },
      "attributes": [],
      "importKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 73,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 138,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 82,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "name": "Main",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 93,
          "end": 138,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 97,
              "end": 136,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 117,
                "name": "field",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 97,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 98,
                    "end": 109,
                    "callee": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 107,
                      "name": "decorator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 135,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 119,
                    "end": 135,
                    "left": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 127,
                      "name": "Services",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 135,
                      "name": "Service",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
