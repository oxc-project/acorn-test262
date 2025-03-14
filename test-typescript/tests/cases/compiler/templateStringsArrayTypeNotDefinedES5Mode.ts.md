templateStringsArrayTypeNotDefinedES5Mode.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 132,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 52,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 52,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 52,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          }
        },
        {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 94,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 83,
            "end": 85,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 87,
            "end": 89,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 93,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 132,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 97,
        "end": 131,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 99,
          "end": 131,
          "expressions": [
            {
              "type": "Literal",
              "start": 109,
              "end": 113,
              "raw": "1234",
              "value": 1234
            },
            {
              "type": "Literal",
              "start": 118,
              "end": 122,
              "raw": "5678",
              "value": 5678
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 99,
              "end": 108,
              "tail": false,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              }
            },
            {
              "type": "TemplateElement",
              "start": 114,
              "end": 117,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 123,
              "end": 131,
              "tail": true,
              "value": {
                "cooked": "ghijkl",
                "raw": "ghijkl"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
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
