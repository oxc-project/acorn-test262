ambientExternalModuleWithRelativeModuleName.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 56,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 44,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 53,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 47,
                      "end": 53
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 33,
        "raw": "\"./relativeModule\"",
        "value": "./relativeModule"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 58,
      "end": 115,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 93,
        "end": 115,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 113,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 112,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 73,
        "end": 92,
        "raw": "\".\\\\relativeModule\"",
        "value": ".\\relativeModule"
      }
    }
  ],
  "sourceType": "script"
}
```
