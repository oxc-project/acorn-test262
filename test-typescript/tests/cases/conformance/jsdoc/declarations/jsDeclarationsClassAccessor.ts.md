__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 122,
      "id": {
        "type": "Literal",
        "start": 27,
        "end": 42,
        "value": "./argument.js",
        "raw": "\"./argument.js\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 122,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 49,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "name": "Argument",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 68,
              "end": 120,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 78,
                  "end": 91,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 85,
                    "name": "idlType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 100,
                  "end": 114,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 107,
                    "name": "default",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 109,
                      "end": 113
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
