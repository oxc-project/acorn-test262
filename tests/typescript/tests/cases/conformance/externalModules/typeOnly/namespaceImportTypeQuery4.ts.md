__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./z",
        "raw": "'./z'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 44,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 53,
        "end": 54,
        "literal": {
          "type": "Literal",
          "start": 53,
          "end": 54,
          "value": 0,
          "raw": "0"
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 69,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 65,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 87,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 77,
        "end": 87,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 85,
          "end": 87,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "EmptyStatement",
      "start": 87,
      "end": 88
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
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 17,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 110,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 49,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 49,
                "exprName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 49,
                  "decorators": [],
                  "name": "types",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 52,
            "end": 110,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 75,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 59,
                  "end": 75,
                  "expression": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 68,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 88,
                "end": 107,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 91,
                  "end": 107,
                  "expression": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 100,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 104,
                    "end": 107
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
