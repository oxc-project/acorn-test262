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
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 36,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 60,
        "end": 67
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
                      "start": 85,
                      "end": 91
                    },
                    "start": 83,
                    "end": 91
                  },
                  "start": 76,
                  "end": 91
                },
                "init": null,
                "definite": false,
                "start": 76,
                "end": 91
              }
            ],
            "declare": false,
            "start": 72,
            "end": 92
          }
        ],
        "start": 68,
        "end": 94
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 45,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
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
        }
      ],
      "source": {
        "type": "Literal",
        "value": "b.foo",
        "raw": "\"b.foo\"",
        "start": 36,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
