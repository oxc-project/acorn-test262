__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
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
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Super",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 59,
  "end": 186,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 59,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 69,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 72,
        "end": 117,
        "expression": {
          "type": "Literal",
          "start": 80,
          "end": 116,
          "raw": "'./importUsedInExtendsList1_require'",
          "value": "./importUsedInExtendsList1_require"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 150,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 137,
        "end": 146,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 146,
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 161,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 161,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 176,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 179,
            "end": 184,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
