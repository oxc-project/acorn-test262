__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 12,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 23,
            "end": 35,
            "callee": {
              "type": "MemberExpression",
              "start": 23,
              "end": 33,
              "object": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 25,
                "end": 33,
                "name": "toString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 45,
            "end": 60,
            "callee": {
              "type": "MemberExpression",
              "start": 45,
              "end": 58,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 47,
                "end": 57,
                "value": "toString",
                "raw": "'toString'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
