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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 120,
            "decorators": [],
            "name": "alpha",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 63,
            "decorators": [],
            "name": "beta",
            "optional": false,
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            }
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
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                "decorators": [],
                "name": "beta",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
