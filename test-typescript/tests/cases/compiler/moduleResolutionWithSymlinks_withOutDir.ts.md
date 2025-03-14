/src/library-a/index.ts
```json
{
  "type": "Program",
  "start": 61,
  "end": 105,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 104,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 68,
        "end": 104,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 82,
          "end": 104,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 84,
              "end": 102,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
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
                "start": 93,
                "end": 101,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 95,
                  "end": 101
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
          "start": 74,
          "end": 81,
          "decorators": [],
          "name": "MyClass",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/src/library-b/index.ts
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
        "value": "library-a"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "MyClass",
            "optional": false
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
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
/src/app.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
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
        "value": "./library-a"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "MyClass",
            "optional": false
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
        "value": "./library-b"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "decorators": [],
            "name": "MyClass2",
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 94,
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 111,
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
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
