__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "value": "foo/Foo",
        "raw": "\"foo/Foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 47,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 40,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "name": "o",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 46,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
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
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 60,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 57,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "name": "source",
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
                "start": 47,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 49,
                  "end": 56
                }
              },
              "accessibility": "protected"
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
      "exportKind": "value"
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
  "end": 60,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 57,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "name": "source",
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
                "start": 47,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 49,
                  "end": 56
                }
              },
              "accessibility": "protected"
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
      "exportKind": "value"
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 25,
        "value": "foo/Foo",
        "raw": "\"foo/Foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 50,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 34,
          "end": 40,
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 49,
        "value": "a",
        "raw": "\"a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 64,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 64,
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
          "init": {
            "type": "MemberExpression",
            "start": 67,
            "end": 70,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
