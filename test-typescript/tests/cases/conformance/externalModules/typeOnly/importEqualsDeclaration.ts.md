__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
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
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 23,
      "end": 34,
      "expression": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 19,
      "end": 38,
      "expression": {
        "type": "Identifier",
        "start": 28,
        "end": 37,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
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
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 13,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 16,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 24,
          "end": 29,
          "raw": "'./a'",
          "value": "./a"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 38,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 49,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 52,
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 60,
          "end": 65,
          "raw": "'./b'",
          "value": "./b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 88,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 88,
          "decorators": [],
          "name": "prototype",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 112,
            "end": 122,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 130,
        "end": 139,
        "argument": {
          "type": "Identifier",
          "start": 135,
          "end": 139,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 191,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 154,
        "end": 191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 168,
            "end": 190,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 190,
              "decorators": [],
              "name": "AConstructor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 190,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 182,
                  "end": 190,
                  "exprName": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
