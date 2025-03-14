functionAndInterfaceWithSeparateErrors.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 115,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1,
      "end": 25,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 23,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 23,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 48,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 115,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 115,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 75,
            "end": 95,
            "parameters": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 85,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 113,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
