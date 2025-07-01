__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 70,
            "end": 72
          },
          "definite": false,
          "start": 66,
          "end": 72
        }
      ],
      "declare": false,
      "start": 62,
      "end": 73
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "V",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "importKind": "value",
      "start": 75,
      "end": 88
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 97
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
              },
              "start": 108,
              "end": 116
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
            "start": 104,
            "end": 117
          }
        ],
        "start": 98,
        "end": 119
      },
      "abstract": false,
      "declare": false,
      "start": 90,
      "end": 119
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "importKind": "value",
      "start": 121,
      "end": 134
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 142
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 152
            },
            "initializer": null,
            "computed": false,
            "start": 149,
            "end": 152
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 158
            },
            "initializer": null,
            "computed": false,
            "start": 154,
            "end": 158
          }
        ],
        "start": 143,
        "end": 160
      },
      "const": false,
      "declare": false,
      "start": 136,
      "end": 160
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
      },
      "importKind": "value",
      "start": 162,
      "end": 175
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 197
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 206
          }
        ],
        "start": 189,
        "end": 208
      },
      "declare": false,
      "start": 177,
      "end": 208
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 222
      },
      "importKind": "value",
      "start": 210,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 223
}
```
