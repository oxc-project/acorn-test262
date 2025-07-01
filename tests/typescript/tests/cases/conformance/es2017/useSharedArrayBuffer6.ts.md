__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foge",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 32
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1024,
                "raw": "1024",
                "start": 33,
                "end": 37
              }
            ],
            "start": 11,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "foge",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 44
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 51
        },
        "optional": false,
        "computed": false,
        "start": 40,
        "end": 51
      },
      "directive": null,
      "start": 40,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 100
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 83,
            "end": 107
          },
          "definite": false,
          "start": 74,
          "end": 107
        }
      ],
      "declare": false,
      "start": 70,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
