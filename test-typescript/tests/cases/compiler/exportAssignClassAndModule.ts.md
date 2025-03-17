__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
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
              "start": 17,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 26,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 19,
                  "end": 26,
                  "left": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 22,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 26,
                    "name": "Bar",
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
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 75,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 54,
              "end": 75,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 68,
                "end": 75,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 78,
      "end": 91,
      "expression": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "start": 55,
  "end": 146,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 108,
          "value": "./exportAssignClassAndModule_0",
          "raw": "'./exportAssignClassAndModule_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 126,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 126,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 119,
                  "end": 126,
                  "left": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 122,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "start": 128,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 139,
            "name": "zz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
                  "name": "Foo",
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
      "type": "ExpressionStatement",
      "start": 141,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 141,
        "end": 145,
        "object": {
          "type": "Identifier",
          "start": 141,
          "end": 143,
          "name": "zz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
