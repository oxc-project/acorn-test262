__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 167,
  "end": 201,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 175,
            "end": 199,
            "properties": [
              {
                "type": "Property",
                "start": 181,
                "end": 186,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 186,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 197,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 195,
                  "end": 197,
                  "raw": "20",
                  "value": 20,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "start": 195,
  "end": 205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
