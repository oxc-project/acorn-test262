__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 48,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 48,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 46,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "value": null
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 30,
        "raw": "\"./foo.js\"",
        "value": "./foo.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 39,
        "end": 62,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 54,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 56,
          "end": 61,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 58,
            "end": 61,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 34,
        "raw": "\"package-a\"",
        "value": "package-a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 43,
        "end": 96,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 68,
          "end": 95,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 70,
            "end": 95,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 80,
              "end": 95,
              "params": [
                {
                  "type": "TSTypeQuery",
                  "start": 81,
                  "end": 94,
                  "exprName": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 94,
                    "decorators": [],
                    "name": "create",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 70,
              "end": 80,
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 32,
        "raw": "\"package-b\"",
        "value": "package-b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 64,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 52,
              "end": 64,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 62,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "decorators": [],
                  "name": "pkg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 62,
                  "decorators": [],
                  "name": "invoke",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
