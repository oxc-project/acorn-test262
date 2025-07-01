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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 96,
            "end": 97
          },
          "definite": false,
          "start": 92,
          "end": 97
        }
      ],
      "declare": false,
      "start": 88,
      "end": 97
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
            "name": "sid",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 133
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "!",
                "raw": "\"!\"",
                "start": 145,
                "end": 148
              },
              "start": 141,
              "end": 148
            },
            "id": null,
            "generator": false,
            "start": 136,
            "end": 148
          },
          "definite": false,
          "start": 130,
          "end": 148
        }
      ],
      "declare": false,
      "start": 126,
      "end": 149
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
            "name": "noreturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 194
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 203,
                "end": 212
              },
              "prefix": true,
              "start": 198,
              "end": 212
            },
            "id": null,
            "generator": false,
            "start": 191,
            "end": 212
          },
          "definite": false,
          "start": 180,
          "end": 212
        }
      ],
      "declare": false,
      "start": 176,
      "end": 212
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 88,
  "end": 322
}
```
