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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 61,
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 14,
                "end": 34,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 76,
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
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 75,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 79,
        "end": 113,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 81,
          "end": 113,
          "expressions": [
            {
              "type": "Literal",
              "start": 91,
              "end": 95,
              "raw": "1234",
              "value": 1234
            },
            {
              "type": "Literal",
              "start": 100,
              "end": 104,
              "raw": "5678",
              "value": 5678
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 81,
              "end": 90,
              "tail": false,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              }
            },
            {
              "type": "TemplateElement",
              "start": 96,
              "end": 99,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 105,
              "end": 113,
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
          "start": 79,
          "end": 80,
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
