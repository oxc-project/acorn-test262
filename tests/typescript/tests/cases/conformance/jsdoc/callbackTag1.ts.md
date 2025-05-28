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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 97,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 148,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 141,
              "end": 148,
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 145,
                "end": 148,
                "value": "!",
                "raw": "\"!\""
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 212,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "UnaryExpression",
              "start": 198,
              "end": 212,
              "operator": "void",
              "argument": {
                "type": "MemberExpression",
                "start": 203,
                "end": 212,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 206,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 212,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
