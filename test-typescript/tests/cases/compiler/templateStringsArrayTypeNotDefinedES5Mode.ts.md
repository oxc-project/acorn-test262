__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 52,
          "name": "x",
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
                "name": "TemplateStringsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 81,
        "end": 94,
        "callee": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 91,
            "end": 93,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 132,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 97,
        "end": 131,
        "tag": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 99,
          "end": 131,
          "expressions": [
            {
              "type": "Literal",
              "start": 109,
              "end": 113,
              "value": 1234,
              "raw": "1234"
            },
            {
              "type": "Literal",
              "start": 118,
              "end": 122,
              "value": 5678,
              "raw": "5678"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 99,
              "end": 108,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 114,
              "end": 117,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 123,
              "end": 131,
              "value": {
                "cooked": "ghijkl",
                "raw": "ghijkl"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
