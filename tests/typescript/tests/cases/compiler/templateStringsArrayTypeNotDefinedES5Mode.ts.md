__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 34
              },
              "typeArguments": null,
              "start": 14,
              "end": 34
            },
            "start": 12,
            "end": 34
          },
          "start": 11,
          "end": 34
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 39,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "start": 36,
          "end": 45
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 47,
          "end": 56
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 58,
        "end": 61
      },
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 65,
            "end": 67
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 69,
            "end": 71
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 73,
            "end": 75
          }
        ],
        "optional": false,
        "start": 63,
        "end": 76
      },
      "directive": null,
      "start": 63,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 80
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abcdef",
                "cooked": "abcdef"
              },
              "tail": false,
              "start": 81,
              "end": 90
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 96,
              "end": 99
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghijkl",
                "cooked": "ghijkl"
              },
              "tail": true,
              "start": 105,
              "end": 113
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1234,
              "raw": "1234",
              "start": 91,
              "end": 95
            },
            {
              "type": "Literal",
              "value": 5678,
              "raw": "5678",
              "start": 100,
              "end": 104
            }
          ],
          "start": 81,
          "end": 113
        },
        "start": 79,
        "end": 113
      },
      "directive": null,
      "start": 79,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
