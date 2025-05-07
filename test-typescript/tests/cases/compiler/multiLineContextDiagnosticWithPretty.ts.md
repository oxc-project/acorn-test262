__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 20,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10,
                    "end": 19,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 11,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 13,
                        "end": 19
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
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
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
                  "type": "ObjectExpression",
                  "start": 32,
                  "end": 54,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 42,
                      "end": 47,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
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
                        "start": 45,
                        "end": 47,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
