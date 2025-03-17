__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 116,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 3,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 31,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 13,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 14,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 25,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 20,
              "end": 25,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 20,
                "end": 23
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
      "start": 33,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 33,
        "end": 116,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 35,
          "end": 116,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 35,
              "end": 116,
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
          "start": 33,
          "end": 34,
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
