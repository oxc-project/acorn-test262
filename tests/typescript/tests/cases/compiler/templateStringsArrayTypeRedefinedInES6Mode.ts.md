__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 26,
        "decorators": [],
        "name": "TemplateStringsArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 30,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 32,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
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
          "start": 43,
          "end": 66,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 66,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 66,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 66,
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
          "start": 68,
          "end": 77,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 77,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 71,
              "end": 77
            }
          }
        },
        {
          "type": "Identifier",
          "start": 79,
          "end": 88,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 88,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 82,
              "end": 88
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 93,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 108,
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 97,
            "end": 99,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 101,
            "end": 103,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 107,
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
      "start": 111,
      "end": 146,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 111,
        "end": 145,
        "tag": {
          "type": "Identifier",
          "start": 111,
          "end": 112,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 113,
          "end": 145,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 113,
              "end": 122,
              "value": {
                "raw": "abcdef",
                "cooked": "abcdef"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 128,
              "end": 131,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 137,
              "end": 145,
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
              "start": 123,
              "end": 127,
              "value": 1234,
              "raw": "1234"
            },
            {
              "type": "Literal",
              "start": 132,
              "end": 136,
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
