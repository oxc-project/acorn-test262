__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 22,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 22,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 8,
                "end": 22,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 8,
                  "end": 20,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 9,
                      "end": 19,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 11,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 11,
                        "end": 18,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 12,
                          "end": 18
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 25,
            "end": 45,
            "elements": [
              {
                "type": "TSTypeAssertion",
                "start": 26,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 27,
                  "end": 39,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 28,
                      "end": 38,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 28,
                        "end": 30,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 30,
                        "end": 37,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 31,
                          "end": 37
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "expression": {
                  "type": "ObjectExpression",
                  "start": 41,
                  "end": 43,
                  "properties": []
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
