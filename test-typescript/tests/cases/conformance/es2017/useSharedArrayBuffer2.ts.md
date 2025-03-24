__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "foge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 38,
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 32,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 33,
                "end": 37,
                "value": 1024,
                "raw": "1024"
              }
            ],
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
      "start": 40,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 67,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 60,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "name": "foge",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 64,
                "end": 66,
                "value": 10,
                "raw": "10"
              }
            ],
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
      "start": 69,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "name": "len",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 94,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "name": "foge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 94,
              "name": "byteLength",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
