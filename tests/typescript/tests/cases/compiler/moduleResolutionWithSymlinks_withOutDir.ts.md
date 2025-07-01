__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 81
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
                "start": 92,
                "end": 93
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 95,
                  "end": 101
                },
                "start": 93,
                "end": 101
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 84,
              "end": 102
            }
          ],
          "start": 82,
          "end": 104
        },
        "abstract": false,
        "declare": false,
        "start": 68,
        "end": 104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 105
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "library-a",
        "raw": "\"library-a\"",
        "start": 22,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 51
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
          },
          "exportKind": "value",
          "start": 44,
          "end": 63
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 16
          },
          "importKind": "value",
          "start": 9,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./library-a",
        "raw": "\"./library-a\"",
        "start": 24,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "importKind": "value",
          "start": 48,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./library-b",
        "raw": "\"./library-b\"",
        "start": 64,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 94
                },
                "typeArguments": null,
                "start": 87,
                "end": 94
              },
              "start": 85,
              "end": 94
            },
            "start": 84,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 94
        }
      ],
      "declare": false,
      "start": 80,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 111
                },
                "typeArguments": null,
                "start": 103,
                "end": 111
              },
              "start": 101,
              "end": 111
            },
            "start": 100,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 111
        }
      ],
      "declare": false,
      "start": 96,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "start": 113,
        "end": 118
      },
      "directive": null,
      "start": 113,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 125
        },
        "start": 120,
        "end": 125
      },
      "directive": null,
      "start": 120,
      "end": 126
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
