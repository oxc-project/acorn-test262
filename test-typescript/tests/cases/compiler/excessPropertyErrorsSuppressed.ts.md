__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 60,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 47,
                "end": 60,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 58,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 63,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 65,
                "end": 75,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 68,
                  "end": 75,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 77,
                "end": 82,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 82,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
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
