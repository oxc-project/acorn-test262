__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 56,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 42,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
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
      "start": 57,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 78,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 78,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 78,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 75,
                  "end": 78,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 78,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 29,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
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
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 19,
              "end": 29,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
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
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 22,
        "raw": "\"a\"",
        "value": "a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 50,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 44,
        "end": 49,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 33,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 64,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 64,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 67,
            "end": 72,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
