__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 322,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 96,
            "end": 97,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 133,
            "decorators": [],
            "name": "sid",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 136,
            "end": 148,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 141,
              "end": 148,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 145,
                "end": 148,
                "raw": "\"!\"",
                "value": "!",
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 188,
            "decorators": [],
            "name": "noreturn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 191,
            "end": 212,
            "async": false,
            "body": {
              "type": "UnaryExpression",
              "start": 198,
              "end": 212,
              "argument": {
                "type": "MemberExpression",
                "start": 203,
                "end": 212,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 212,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "void",
              "prefix": true
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 194,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
