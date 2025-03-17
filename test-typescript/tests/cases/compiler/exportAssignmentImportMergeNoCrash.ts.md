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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 28,
              "raw": "12",
              "value": 12
            }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 30,
        "raw": "\"./assignment\"",
        "value": "./assignment"
      },
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 60,
            "definite": false,
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
              "argument": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "void",
              "prefix": true
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
