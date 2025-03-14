__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 36,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 36,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 34,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "exports",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 82,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "require",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 75,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 75,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 69,
              "end": 75
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 81,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 78,
          "end": 81
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
