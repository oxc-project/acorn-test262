contextualTyping6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
          "definite": false,
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
                      "key": {
                        "type": "Identifier",
                        "start": 9,
                        "end": 11,
                        "decorators": [],
                        "name": "id",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 11,
                        "end": 18,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 12,
                          "end": 18
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 25,
            "end": 41,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 26,
                "end": 32,
                "properties": [
                  {
                    "type": "Property",
                    "start": 27,
                    "end": 31,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 29,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 30,
                      "end": 31,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 34,
                "end": 40,
                "properties": [
                  {
                    "type": "Property",
                    "start": 35,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 37,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 38,
                      "end": 39,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
