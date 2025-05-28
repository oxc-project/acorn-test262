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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 59,
  "end": 185,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 72,
        "end": 117,
        "expression": {
          "type": "Literal",
          "start": 80,
          "end": 116,
          "value": "./importUsedInExtendsList1_require",
          "raw": "'./importUsedInExtendsList1_require'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 150,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 137,
        "end": 146,
        "object": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 146,
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 150,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 162,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 161,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 161,
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 185,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 184,
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
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
