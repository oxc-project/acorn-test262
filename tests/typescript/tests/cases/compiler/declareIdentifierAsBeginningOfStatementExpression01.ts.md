__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 29,
            "decorators": [],
            "name": "declare",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 32,
        "end": 52,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 39,
          "decorators": [],
          "name": "declare",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
