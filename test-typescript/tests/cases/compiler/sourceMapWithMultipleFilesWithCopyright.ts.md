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
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 186,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 197,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 195,
                  "end": 197,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
  "end": 206,
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
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
