types.ts
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
  "sourceType": "module"
}
```
testA.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 56,
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 58,
      "end": 107,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 81,
        "end": 107,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 85,
            "end": 105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 89,
                "end": 104,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 104,
                  "decorators": [],
                  "name": "onlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 98,
                      "end": 104
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
        "start": 73,
        "end": 80,
        "raw": "\"a.foo\"",
        "value": "a.foo"
      }
    }
  ],
  "sourceType": "module"
}
```
testB.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 56,
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "everywhere",
            "optional": false
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "onlyInA",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 120,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 120,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 94,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 98,
                "end": 117,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 117,
                  "decorators": [],
                  "name": "alsoOnlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
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
        "start": 82,
        "end": 89,
        "raw": "\"a.foo\"",
        "value": "a.foo"
      }
    }
  ],
  "sourceType": "module"
}
```
