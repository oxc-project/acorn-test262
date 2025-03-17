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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 36,
          "name": "args",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "object": {
                "type": "Identifier",
                "start": 51,
                "end": 55,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 56,
                "end": 62,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
