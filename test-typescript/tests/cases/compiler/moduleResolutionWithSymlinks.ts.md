__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 155,
  "end": 199,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 198,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 198,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 175,
          "name": "MyClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 198,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 178,
              "end": 196,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
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
                "start": 187,
                "end": 195,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 189,
                  "end": 195
                }
              },
              "accessibility": "private"
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "value": "library-a",
        "raw": "\"library-a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 65,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 63,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "name": "MyClass2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "end": 806,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 37,
        "value": "./library-a",
        "raw": "\"./library-a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 78,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 48,
          "end": 56,
          "imported": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "name": "MyClass2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "name": "MyClass2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 77,
        "value": "./library-b",
        "raw": "\"./library-b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 94,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 94,
                  "name": "MyClass",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 111,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 111,
                  "name": "MyClass2",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
