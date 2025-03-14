esDecorators-classDeclaration-methods-staticPrivate.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 64,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 62,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 37,
                "end": 41,
                "expression": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 49,
              "end": 57,
              "name": "method1"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 62,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 107,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 105,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 92,
              "end": 100,
              "name": "method1"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 105,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 105,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 66,
          "end": 70,
          "expression": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
