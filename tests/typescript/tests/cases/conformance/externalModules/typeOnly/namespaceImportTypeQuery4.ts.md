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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "importKind": "value",
          "start": 14,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./z",
        "raw": "'./z'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 29
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 53,
          "end": 54
        },
        "start": 53,
        "end": 54
      },
      "declare": false,
      "start": 44,
      "end": 55
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exportKind": "value",
          "start": 65,
          "end": 66
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 85,
          "end": 87
        },
        "abstract": false,
        "declare": false,
        "start": 77,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 70,
      "end": 87
    },
    {
      "type": "EmptyStatement",
      "start": 87,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "types",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 49
                },
                "typeArguments": null,
                "start": 37,
                "end": 49
              },
              "start": 35,
              "end": 49
            },
            "start": 34,
            "end": 49
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 68
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  },
                  "start": 59,
                  "end": 75
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 56,
                "end": 75
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 100
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 104,
                    "end": 107
                  },
                  "start": 91,
                  "end": 107
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 88,
                "end": 107
              }
            ],
            "start": 52,
            "end": 110
          },
          "definite": false,
          "start": 34,
          "end": 110
        }
      ],
      "declare": false,
      "start": 30,
      "end": 110
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
