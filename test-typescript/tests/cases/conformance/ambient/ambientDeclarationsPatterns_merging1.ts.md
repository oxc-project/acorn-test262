__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 52,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 50,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 49,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 49,
                  "decorators": [],
                  "name": "everywhere",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"*.foo\"",
        "value": "*.foo"
      }
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
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "raw": "\"a.foo\"",
        "value": "a.foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 94,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 91,
                  "decorators": [],
                  "name": "onlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 60,
        "end": 67,
        "raw": "\"a.foo\"",
        "value": "a.foo"
      }
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
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "raw": "\"b.foo\"",
        "value": "b.foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
