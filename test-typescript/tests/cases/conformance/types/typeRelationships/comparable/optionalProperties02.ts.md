optionalProperties02.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 31,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
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
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 72,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 50,
        "end": 71,
        "expression": {
          "type": "ObjectExpression",
          "start": 55,
          "end": 71,
          "properties": [
            {
              "type": "Property",
              "start": 57,
              "end": 69,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 60,
                "end": 69,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 51,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 51,
            "end": 54,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
