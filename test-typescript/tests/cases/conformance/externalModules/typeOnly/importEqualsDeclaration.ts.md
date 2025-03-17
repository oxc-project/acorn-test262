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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
      "type": "TSExportAssignment",
      "start": 23,
      "end": 34,
      "expression": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "A",
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
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "SomeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 18,
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
      "type": "TSExportAssignment",
      "start": 19,
      "end": 38,
      "expression": {
        "type": "Identifier",
        "start": 28,
        "end": 37,
        "name": "SomeClass",
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 16,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 24,
          "end": 29,
          "value": "./a",
          "raw": "'./a'"
        }
      },
      "importKind": "type"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 38,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 49,
        "name": "type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 52,
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 60,
          "end": 65,
          "value": "./b",
          "raw": "'./b'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 89,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 88,
        "object": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 88,
          "name": "prototype",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 109,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "name": "A",
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
          "init": {
            "type": "ObjectExpression",
            "start": 112,
            "end": 122,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 120,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 140,
      "expression": {
        "type": "UnaryExpression",
        "start": 130,
        "end": 139,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 135,
          "end": 139,
          "name": "type",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 191,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 154,
        "end": 191,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 168,
            "end": 190,
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 190,
              "name": "AConstructor",
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
                    "name": "A",
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
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
