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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 32,
      "end": 93,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 93,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 66,
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 108,
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
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 107,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
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
      "start": 111,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 111,
        "end": 145,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 113,
          "end": 145,
          "expressions": [
            {
              "type": "Literal",
              "start": 123,
              "end": 127,
              "raw": "1234",
              "value": 1234
            },
            {
              "type": "Literal",
              "start": 132,
              "end": 136,
              "raw": "5678",
              "value": 5678
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 113,
              "end": 122,
              "tail": false,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              }
            },
            {
              "type": "TemplateElement",
              "start": 128,
              "end": 131,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 137,
              "end": 145,
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
          "start": 111,
          "end": 112,
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
