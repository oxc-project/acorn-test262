__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 26,
            "end": 39,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 39,
                "value": {
                  "cooked": "helloworld",
                  "raw": "hello\\world"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 49,
            "end": 63,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 63,
                "value": {
                  "cooked": "hello\\world",
                  "raw": "hello\\\\world"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 73,
            "end": 88,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 73,
                "end": 88,
                "value": {
                  "cooked": "hello\\world",
                  "raw": "hello\\\\\\world"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 98,
            "end": 114,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 98,
                "end": 114,
                "value": {
                  "cooked": "hello\\\\world",
                  "raw": "hello\\\\\\\\world"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
