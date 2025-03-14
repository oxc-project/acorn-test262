exportAssignClassAndModule_0.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 26,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
                }
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 75,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 54,
              "end": 75,
              "body": {
                "type": "TSInterfaceBody",
                "start": 68,
                "end": 75,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 78,
      "end": 91,
      "expression": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
exportAssignClassAndModule_1.ts
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
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 108,
          "raw": "'./exportAssignClassAndModule_0'",
          "value": "./exportAssignClassAndModule_0"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 126,
            "decorators": [],
            "name": "z",
            "optional": false,
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
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
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
      "start": 128,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 139,
            "decorators": [],
            "name": "zz",
            "optional": false,
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 141,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 141,
        "end": 145,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 141,
          "end": 143,
          "decorators": [],
          "name": "zz",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
