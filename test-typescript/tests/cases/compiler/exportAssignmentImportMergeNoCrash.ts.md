__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 30,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 28,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 28,
              "value": 12,
              "raw": "12"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "exportKind": "value"
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
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "Obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 30,
        "value": "./assignment",
        "raw": "\"./assignment\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "Obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 52,
              "end": 60,
              "operator": "void",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
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
