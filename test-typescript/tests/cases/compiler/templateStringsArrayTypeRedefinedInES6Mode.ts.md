templateStringsArrayTypeRedefinedInES6Mode.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 48,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 44,
        "decorators": [],
        "name": "TemplateStringsArray",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 111,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 111,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 61,
          "end": 84,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 95,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 95,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 89,
              "end": 95
            }
          }
        },
        {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 106,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 100,
              "end": 106
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 126,
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
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 164,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 129,
        "end": 163,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 131,
          "end": 163,
          "expressions": [
            {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "raw": "1234",
              "value": 1234
            },
            {
              "type": "Literal",
              "start": 150,
              "end": 154,
              "raw": "5678",
              "value": 5678
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 131,
              "end": 140,
              "tail": false,
              "value": {
                "cooked": "abcdef",
                "raw": "abcdef"
              }
            },
            {
              "type": "TemplateElement",
              "start": 146,
              "end": 149,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 155,
              "end": 163,
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
          "start": 129,
          "end": 130,
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
