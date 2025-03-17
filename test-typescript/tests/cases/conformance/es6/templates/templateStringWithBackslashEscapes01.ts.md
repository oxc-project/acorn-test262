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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "helloworld",
                  "raw": "hello\\world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "hello\\world",
                  "raw": "hello\\\\world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "hello\\world",
                  "raw": "hello\\\\\\world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "hello\\\\world",
                  "raw": "hello\\\\\\\\world"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
