__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 103,
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 90,
                "end": 103,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 92,
                    "end": 101,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
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
  "start": 32,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false,
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
          },
          "init": {
            "type": "MemberExpression",
            "start": 48,
            "end": 55,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
