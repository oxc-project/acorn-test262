__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "start": 27,
              "end": 32
            },
            "start": 24,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 32
        }
      ],
      "declare": true,
      "start": 12,
      "end": 33
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 39
            },
            "start": 35,
            "end": 39
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 63,
          "end": 66
        },
        "abstract": false,
        "declare": false,
        "start": 55,
        "end": 66
      },
      "exportKind": "value",
      "start": 40,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
        },
        "prefix": true,
        "start": 68,
        "end": 74
      },
      "directive": null,
      "start": 68,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "after",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 88
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 91,
            "end": 95
          },
          "definite": false,
          "start": 83,
          "end": 95
        }
      ],
      "declare": false,
      "start": 77,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
