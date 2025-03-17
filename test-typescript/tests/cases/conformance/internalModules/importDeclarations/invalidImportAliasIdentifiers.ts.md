__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 224,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 70,
            "end": 72,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 75,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "V",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
              "name": "name",
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
              "start": 108,
              "end": 116,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
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
    {
      "type": "TSImportEqualsDeclaration",
      "start": 121,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 136,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 142,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 149,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "name": "Red",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 154,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 158,
            "name": "Blue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 143,
        "end": 160,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 149,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 152,
              "name": "Red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 154,
            "end": 158,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 158,
              "name": "Blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 162,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 177,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 189,
        "end": 208,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 195,
            "end": 206,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 197,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
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
      "type": "TSImportEqualsDeclaration",
      "start": 210,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 221,
        "end": 222,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
