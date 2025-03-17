__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 122,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 120,
            "name": "alpha",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 107,
                "end": 120,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 109,
                    "end": 118,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 112,
                        "end": 118
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
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 63,
            "name": "beta",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 50,
                "end": 63,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 61,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 55,
                        "end": 61
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
  "start": 63,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 79,
            "end": 95,
            "left": {
              "type": "MemberExpression",
              "start": 79,
              "end": 86,
              "object": {
                "type": "Identifier",
                "start": 79,
                "end": 84,
                "name": "alpha",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 89,
              "end": 95,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "name": "beta",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
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
