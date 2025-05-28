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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 199,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 186,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 197,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 195,
                  "end": 197,
                  "value": 20,
                  "raw": "20"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 204,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
