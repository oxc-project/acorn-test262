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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "*.foo",
        "raw": "\"*.foo\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 49,
                  "name": "everywhere",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "everywhere",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "everywhere",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "name": "onlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "name": "onlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "name": "alsoOnlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "name": "alsoOnlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 56,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 58,
      "end": 107,
      "id": {
        "type": "Literal",
        "start": 73,
        "end": 80,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 104,
                  "name": "onlyInA",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 98,
                      "end": 104
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "everywhere",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "name": "everywhere",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 21,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "name": "onlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "name": "onlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "name": "alsoOnlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 41,
            "name": "alsoOnlyInA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 56,
        "value": "b.foo",
        "raw": "\"b.foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 120,
      "id": {
        "type": "Literal",
        "start": 82,
        "end": 89,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 117,
                  "name": "alsoOnlyInA",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
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
