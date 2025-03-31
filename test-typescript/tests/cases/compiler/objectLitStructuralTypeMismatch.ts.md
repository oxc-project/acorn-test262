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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 42,
            "name": "x",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
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
            "start": 45,
            "end": 53,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 51,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "value": 5,
                  "raw": "5"
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
