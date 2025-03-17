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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Super",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "Sub",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 137,
        "end": 146,
        "object": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 146,
          "name": "Super",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 150,
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
      "type": "VariableDeclaration",
      "start": 151,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 161,
            "name": "s",
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
                  "name": "Sub",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 176,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 179,
            "end": 184,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
