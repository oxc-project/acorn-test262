__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "start": 26,
            "end": 35
          }
        ],
        "start": 20,
        "end": 37
      },
      "expression": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 57
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fs",
                "raw": "\"fs\"",
                "start": 58,
                "end": 62
              }
            ],
            "optional": false,
            "start": 50,
            "end": 63
          },
          "definite": false,
          "start": 45,
          "end": 63
        }
      ],
      "declare": false,
      "start": 39,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 75
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 80
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 93
              },
              "optional": false,
              "computed": false,
              "start": 78,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/a/b/c",
                "raw": "\"/a/b/c\"",
                "start": 94,
                "end": 102
              }
            ],
            "optional": false,
            "start": 78,
            "end": 103
          },
          "definite": false,
          "start": 71,
          "end": 103
        }
      ],
      "declare": false,
      "start": 65,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
