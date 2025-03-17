__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 164,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 44,
        "name": "TemplateStringsArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 48,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
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
          "start": 61,
          "end": 84,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 84,
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
          "start": 86,
          "end": 95,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 95,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 89,
              "end": 95
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 106,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 100,
              "end": 106
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 111,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 126,
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 115,
            "end": 117,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 119,
            "end": 121,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
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
      "start": 129,
      "end": 164,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 129,
        "end": 163,
        "tag": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 131,
          "end": 163,
          "expressions": [
            {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "value": 1234,
              "raw": "1234"
            },
            {
              "type": "Literal",
              "start": 150,
              "end": 154,
              "value": 5678,
              "raw": "5678"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 131,
              "end": 140,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 146,
              "end": 149,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 155,
              "end": 163,
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
