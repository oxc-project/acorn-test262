taggedTemplateStringsWithMultilineTemplateES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
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
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 25,
          "argument": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "args",
            "optional": false
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 26,
        "end": 32,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 28,
          "end": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 47,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 38,
        "end": 46,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 40,
          "end": 46,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 40,
              "end": 46,
              "tail": true,
              "value": {
                "cooked": "\n\n",
                "raw": "\n\\\n\n"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
