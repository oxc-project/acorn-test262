__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 20,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 18,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
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
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 12,
                        "end": 18
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 23,
            "end": 44,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 35,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 35,
                  "raw": "\"hello\"",
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 37,
                "end": 42,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
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
                  "start": 40,
                  "end": 42,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
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
