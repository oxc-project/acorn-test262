__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 30,
            "end": 48,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "decorators": [],
                  "name": "MODULE",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 44,
                      "end": 47
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 50,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 30,
            "end": 48,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 47,
                  "decorators": [],
                  "name": "SCRIPT",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 44,
                      "end": 47
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
  "start": 30,
  "end": 63,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 37,
      "expression": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "MODULE",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 54,
      "expression": {
        "type": "Identifier",
        "start": 47,
        "end": 53,
        "decorators": [],
        "name": "SCRIPT",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
