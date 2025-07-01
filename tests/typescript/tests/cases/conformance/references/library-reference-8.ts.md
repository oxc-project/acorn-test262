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
                      "start": 109,
                      "end": 110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 112,
                        "end": 118
                      },
                      "start": 110,
                      "end": 118
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 109,
                    "end": 118
                  }
                ],
                "start": 107,
                "end": 120
              },
              "start": 105,
              "end": 120
            },
            "start": 100,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 120
        }
      ],
      "declare": true,
      "start": 88,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 88,
  "end": 122
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
            "name": "beta",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 61
                  }
                ],
                "start": 50,
                "end": 63
              },
              "start": 48,
              "end": 63
            },
            "start": 44,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 63
        }
      ],
      "declare": true,
      "start": 32,
      "end": 64
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 65
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
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "start": 67,
            "end": 76
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 84
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "optional": false,
              "computed": false,
              "start": 79,
              "end": 86
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "beta",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 95
              },
              "optional": false,
              "computed": false,
              "start": 89,
              "end": 95
            },
            "start": 79,
            "end": 95
          },
          "definite": false,
          "start": 67,
          "end": 95
        }
      ],
      "declare": false,
      "start": 63,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 63,
  "end": 97
}
```
