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
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 103,
            "name": "alpha",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 48,
            "end": 55,
            "object": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "name": "alpha",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
