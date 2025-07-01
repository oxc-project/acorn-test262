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
          "name": "Services",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Service",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 50
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 51,
                  "end": 53
                },
                "abstract": false,
                "declare": false,
                "start": 37,
                "end": 53
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 30,
              "end": 53
            }
          ],
          "start": 26,
          "end": 55
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
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
            "name": "Services",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Services",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 22
          },
          "importKind": "value",
          "start": 14,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./services",
        "raw": "'./services'",
        "start": 30,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
              },
              "start": 68,
              "end": 73
            },
            "start": 59,
            "end": 73
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 73
        }
      ],
      "declare": true,
      "start": 45,
      "end": 74
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Main",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 92
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [
                {
                  "type": "Decorator",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "decorator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 107
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 98,
                    "end": 109
                  },
                  "start": 97,
                  "end": 109
                }
              ],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 117
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 127
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Service",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 135
                    },
                    "start": 119,
                    "end": 135
                  },
                  "typeArguments": null,
                  "start": 119,
                  "end": 135
                },
                "start": 117,
                "end": 135
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 97,
              "end": 136
            }
          ],
          "start": 93,
          "end": 138
        },
        "abstract": false,
        "declare": false,
        "start": 82,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
