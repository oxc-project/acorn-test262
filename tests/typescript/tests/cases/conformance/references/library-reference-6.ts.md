__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "alpha",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 95,
                        "end": 101
                      },
                      "start": 93,
                      "end": 101
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 92,
                    "end": 101
                  }
                ],
                "start": 90,
                "end": 103
              },
              "start": 88,
              "end": 103
            },
            "start": 83,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 103
        }
      ],
      "declare": true,
      "start": 71,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 71,
  "end": 105
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "start": 36,
            "end": 45
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "optional": false,
            "computed": false,
            "start": 48,
            "end": 55
          },
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": false,
      "start": 32,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 57
}
```
