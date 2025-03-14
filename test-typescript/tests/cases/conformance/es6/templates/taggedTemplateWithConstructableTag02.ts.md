__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 69,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 69,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 47,
            "params": [
              {
                "type": "RestElement",
                "start": 23,
                "end": 37,
                "argument": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 32,
                    "end": 37,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 32,
                      "end": 35
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 52,
            "end": 67,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 101,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 82,
        "end": 100,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 86,
          "end": 100,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 86,
              "end": 100,
              "tail": true,
              "value": {
                "cooked": "Hello world!",
                "raw": "Hello world!"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 82,
          "end": 85,
          "decorators": [],
          "name": "tag",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
