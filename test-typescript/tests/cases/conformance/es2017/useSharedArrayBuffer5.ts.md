__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
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
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "decorators": [],
            "name": "stringTag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 56,
            "end": 80,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 56,
              "end": 60,
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 61,
              "end": 79,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 79,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "decorators": [],
            "name": "species",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 129,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 113,
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 114,
              "end": 128,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 121,
                "end": 128,
                "decorators": [],
                "name": "species",
                "optional": false,
                "typeAnnotation": null
              }
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
