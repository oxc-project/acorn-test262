__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 28,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 28,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 22,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 22,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 22,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 30,
        "end": 113,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 32,
          "end": 113,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 113,
              "tail": true,
              "value": {
                "cooked": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n",
                "raw": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 2028 2029 0085 t v f b r n"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
