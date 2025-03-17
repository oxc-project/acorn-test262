__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 46,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 44,
          "end": 46,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 22,
            "end": 28,
            "expression": {
              "type": "CallExpression",
              "start": 23,
              "end": 28,
              "callee": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "name": "dec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ],
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
  "end": 123,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 58,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 36,
          "name": "__esDecorate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "RestElement",
            "start": 37,
            "end": 51,
            "argument": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 51,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 46,
                "end": 51,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 46,
                  "end": 49
                }
              }
            },
            "value": null
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 52,
          "end": 57,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 54,
            "end": 57
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 122,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 66,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 100,
          "name": "__runInitializers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "RestElement",
            "start": 101,
            "end": 115,
            "argument": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 115,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 110,
                "end": 115,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 110,
                  "end": 113
                }
              }
            },
            "value": null
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 116,
          "end": 121,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 118,
            "end": 121
          }
        }
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
