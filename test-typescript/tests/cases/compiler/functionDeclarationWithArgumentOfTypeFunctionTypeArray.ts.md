__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 65,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 44,
            "end": 63,
            "argument": {
              "type": "MemberExpression",
              "start": 51,
              "end": 62,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 55,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 62,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 36,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 36,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 36,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 19,
                "end": 34,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 21,
                    "end": 32,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 26,
                        "end": 32
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
