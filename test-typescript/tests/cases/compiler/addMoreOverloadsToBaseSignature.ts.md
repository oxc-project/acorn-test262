addMoreOverloadsToBaseSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 34,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "static": false
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
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 81,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 75,
                    "end": 81
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
