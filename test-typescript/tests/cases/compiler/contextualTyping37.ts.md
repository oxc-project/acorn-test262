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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 35,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 37,
                        "end": 40,
                        "value": "s",
                        "raw": "\"s\""
                      },
                      "kind": "init",
                      "optional": false
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 15,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
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
