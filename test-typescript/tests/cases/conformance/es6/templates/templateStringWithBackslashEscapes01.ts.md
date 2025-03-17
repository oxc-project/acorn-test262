__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 11,
            "end": 24,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 11,
                "end": 24,
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
      "start": 26,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 34,
            "end": 48,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 34,
                "end": 48,
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
      "start": 50,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 58,
            "end": 73,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 58,
                "end": 73,
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
      "start": 75,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 83,
            "end": 99,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 83,
                "end": 99,
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
