__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 34,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 14,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 34,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 45,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 45,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 39,
              "end": 45
            }
          }
        },
        {
          "type": "Identifier",
          "start": 47,
          "end": 56,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 61,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 76,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 65,
            "end": 67,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 69,
            "end": 71,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 75,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 114,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 79,
        "end": 113,
        "tag": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 81,
          "end": 113,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 81,
              "end": 90,
              "value": {
                "raw": "abcdef",
                "cooked": "abcdef"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 96,
              "end": 99,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 105,
              "end": 113,
              "value": {
                "raw": "ghijkl",
                "cooked": "ghijkl"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 91,
              "end": 95,
              "value": 1234,
              "raw": "1234"
            },
            {
              "type": "Literal",
              "start": 100,
              "end": 104,
              "value": 5678,
              "raw": "5678"
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
