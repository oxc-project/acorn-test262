__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
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
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 22
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 26
                  },
                  "start": 19,
                  "end": 26
                },
                "typeArguments": null,
                "start": 19,
                "end": 26
              },
              "start": 17,
              "end": 26
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
            "start": 16,
            "end": 27
          }
        ],
        "start": 10,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 70
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 71,
                "end": 78
              },
              "declare": false,
              "start": 57,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 50,
            "end": 78
          }
        ],
        "start": 44,
        "end": 80
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 30,
      "end": 80
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 93
      },
      "start": 81,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exportAssignClassAndModule_0",
          "raw": "'./exportAssignClassAndModule_0'",
          "start": 76,
          "end": 108
        },
        "start": 68,
        "end": 109
      },
      "importKind": "value",
      "start": 55,
      "end": 110
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 122
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 126
                  },
                  "start": 119,
                  "end": 126
                },
                "typeArguments": null,
                "start": 119,
                "end": 126
              },
              "start": 117,
              "end": 126
            },
            "start": 116,
            "end": 126
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 126
        }
      ],
      "declare": false,
      "start": 112,
      "end": 127
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 139
                },
                "typeArguments": null,
                "start": 136,
                "end": 139
              },
              "start": 134,
              "end": 139
            },
            "start": 132,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 139
        }
      ],
      "declare": false,
      "start": 128,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "zz",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 143
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "optional": false,
        "computed": false,
        "start": 141,
        "end": 145
      },
      "directive": null,
      "start": 141,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 146
}
```
