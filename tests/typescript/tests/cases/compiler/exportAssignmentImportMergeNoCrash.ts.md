__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 26,
              "end": 28
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 28
          }
        ],
        "start": 15,
        "end": 30
      },
      "exportKind": "value",
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./assignment",
        "raw": "\"./assignment\"",
        "start": 16,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 60
              },
              "prefix": true,
              "start": 52,
              "end": 60
            },
            "definite": false,
            "start": 46,
            "end": 60
          }
        ],
        "declare": false,
        "start": 40,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
