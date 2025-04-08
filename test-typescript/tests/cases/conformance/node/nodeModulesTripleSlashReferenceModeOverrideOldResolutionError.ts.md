__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 41,
                      "end": 47
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
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 41,
                      "end": 47
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
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "start": 111,
  "end": 131,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 115,
      "expression": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 120,
      "expression": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 131,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
