__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 33,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "GlobalThing",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 51,
                  "decorators": [],
                  "name": "GlobalThing",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 62,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 60,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 60,
                  "raw": "0",
                  "value": 0
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
  "sourceType": "module",
  "hashbang": null
}
```
