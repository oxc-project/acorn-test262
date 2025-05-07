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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "foge",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 38,
            "arguments": [
              {
                "type": "Literal",
                "start": 33,
                "end": 37,
                "raw": "1024",
                "value": 1024,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 32,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 67,
            "arguments": [
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 64,
                "end": 66,
                "raw": "10",
                "value": 10,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 60,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "decorators": [],
                "name": "foge",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 79,
            "end": 94,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 94,
              "decorators": [],
              "name": "byteLength",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
