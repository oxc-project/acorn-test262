__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 32,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 32,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
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
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 55,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 62,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 63,
          "end": 66,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 35,
            "end": 39,
            "expression": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 75,
      "expression": {
        "type": "UnaryExpression",
        "start": 68,
        "end": 74,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "name": "after",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 91,
            "end": 95,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "using",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
