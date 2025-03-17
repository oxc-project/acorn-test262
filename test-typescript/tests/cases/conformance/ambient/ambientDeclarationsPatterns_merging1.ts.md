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
  "end": 95,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
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
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 94,
      "id": {
        "type": "Literal",
        "start": 60,
        "end": 67,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 91,
                  "name": "onlyInA",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
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
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
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
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "value": "b.foo",
        "raw": "\"b.foo\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
