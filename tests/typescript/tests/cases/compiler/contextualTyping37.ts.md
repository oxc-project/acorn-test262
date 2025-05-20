__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 49,
            "expression": {
              "type": "ArrayExpression",
              "start": 29,
              "end": 49,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 30,
                  "end": 42,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 32,
                      "end": 40,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 35,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 37,
                        "end": 40,
                        "raw": "\"s\"",
                        "value": "s"
                      }
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 44,
                  "end": 48,
                  "properties": []
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 11,
              "end": 28,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 11,
                "end": 26,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 24,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 15,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    }
                  }
                ]
              }
            }
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
