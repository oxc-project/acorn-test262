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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 198,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 198,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 178,
              "end": 196,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 175,
          "decorators": [],
          "name": "MyClass",
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "raw": "\"library-a\"",
        "value": "library-a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "MyClass",
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
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 63,
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 805,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 37,
        "raw": "\"./library-a\"",
        "value": "./library-a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 78,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 77,
        "raw": "\"./library-b\"",
        "value": "./library-b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 48,
          "end": 56,
          "imported": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "decorators": [],
            "name": "MyClass2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 94,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 94,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 94,
                  "decorators": [],
                  "name": "MyClass",
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
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 111,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 111,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 111,
                  "decorators": [],
                  "name": "MyClass2",
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
