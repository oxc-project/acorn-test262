__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 28,
                "end": 42,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 30,
                    "end": 40,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 53,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "raw": "5",
                  "value": 5
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
