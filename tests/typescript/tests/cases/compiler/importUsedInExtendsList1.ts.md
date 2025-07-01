__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
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
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 24
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 24,
                "end": 32
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
              "start": 21,
              "end": 33
            }
          ],
          "start": 19,
          "end": 35
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importUsedInExtendsList1_require",
          "raw": "'./importUsedInExtendsList1_require'",
          "start": 80,
          "end": 116
        },
        "start": 72,
        "end": 117
      },
      "importKind": "value",
      "start": 59,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 128
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 140
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 146
        },
        "optional": false,
        "computed": false,
        "start": 137,
        "end": 146
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 147,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sub",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 161
                },
                "typeArguments": null,
                "start": 158,
                "end": 161
              },
              "start": 156,
              "end": 161
            },
            "start": 155,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 161
        }
      ],
      "declare": false,
      "start": 151,
      "end": 162
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 167,
            "end": 176
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 184
            },
            "optional": false,
            "computed": false,
            "start": 179,
            "end": 184
          },
          "definite": false,
          "start": 167,
          "end": 184
        }
      ],
      "declare": false,
      "start": 163,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 59,
  "end": 185
}
```
