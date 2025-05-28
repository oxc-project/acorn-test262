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
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 51,
                  "end": 53,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
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
  "end": 138,
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
            "decorators": [],
            "name": "Services",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "Services",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 74,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 73,
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
          "init": null,
          "definite": false
        }
      ],
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 93,
          "end": 138,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 97,
              "end": 136,
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
                      "decorators": [],
                      "name": "decorator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 112,
                "end": 117,
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null
              },
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
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
