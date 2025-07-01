__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TemplateStringsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 26
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 27,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 42
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
                "start": 46,
                "end": 66
              },
              "typeArguments": null,
              "start": 46,
              "end": 66
            },
            "start": 44,
            "end": 66
          },
          "start": 43,
          "end": 66
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
              "start": 71,
              "end": 77
            },
            "start": 69,
            "end": 77
          },
          "start": 68,
          "end": 77
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
              "start": 82,
              "end": 88
            },
            "start": 80,
            "end": 88
          },
          "start": 79,
          "end": 88
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 90,
        "end": 93
      },
      "expression": false,
      "start": 32,
      "end": 93
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
          "start": 95,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 97,
            "end": 99
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 101,
            "end": 103
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 105,
            "end": 107
          }
        ],
        "optional": false,
        "start": 95,
        "end": 108
      },
      "directive": null,
      "start": 95,
      "end": 109
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
          "start": 111,
          "end": 112
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
              "start": 113,
              "end": 122
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 128,
              "end": 131
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghijkl",
                "cooked": "ghijkl"
              },
              "tail": true,
              "start": 137,
              "end": 145
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1234,
              "raw": "1234",
              "start": 123,
              "end": 127
            },
            {
              "type": "Literal",
              "value": 5678,
              "raw": "5678",
              "start": 132,
              "end": 136
            }
          ],
          "start": 113,
          "end": 145
        },
        "start": 111,
        "end": 145
      },
      "directive": null,
      "start": 111,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
