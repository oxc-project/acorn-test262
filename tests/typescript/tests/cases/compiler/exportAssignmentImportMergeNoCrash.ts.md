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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 28,
              "value": 12,
              "raw": "12"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
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
  "end": 61,
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
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "UnaryExpression",
              "start": 52,
              "end": 60,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
