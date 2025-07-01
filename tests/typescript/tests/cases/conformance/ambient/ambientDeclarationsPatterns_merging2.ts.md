__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "*.foo",
        "raw": "\"*.foo\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "everywhere",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    },
                    "start": 41,
                    "end": 49
                  },
                  "start": 31,
                  "end": 49
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 49
              }
            ],
            "declare": false,
            "start": 27,
            "end": 50
          }
        ],
        "start": 23,
        "end": 52
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "importKind": "value",
          "start": 21,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 41
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 41
          },
          "importKind": "value",
          "start": 30,
          "end": 41
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 49,
        "end": 56
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 73,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 98,
                      "end": 104
                    },
                    "start": 96,
                    "end": 104
                  },
                  "start": 89,
                  "end": 104
                },
                "init": null,
                "definite": false,
                "start": 89,
                "end": 104
              }
            ],
            "declare": false,
            "start": 85,
            "end": 105
          }
        ],
        "start": 81,
        "end": 107
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 58,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "everywhere",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "importKind": "value",
          "start": 21,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 41
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "alsoOnlyInA",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 41
          },
          "importKind": "value",
          "start": 30,
          "end": 41
        }
      ],
      "source": {
        "type": "Literal",
        "value": "b.foo",
        "raw": "\"b.foo\"",
        "start": 49,
        "end": 56
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 82,
        "end": 89
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alsoOnlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    },
                    "start": 109,
                    "end": 117
                  },
                  "start": 98,
                  "end": 117
                },
                "init": null,
                "definite": false,
                "start": 98,
                "end": 117
              }
            ],
            "declare": false,
            "start": 94,
            "end": 118
          }
        ],
        "start": 90,
        "end": 120
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
