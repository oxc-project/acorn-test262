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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 53
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 60
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 61,
              "end": 79
            },
            "optional": false,
            "computed": true,
            "start": 56,
            "end": 80
          },
          "definite": false,
          "start": 44,
          "end": 80
        }
      ],
      "declare": false,
      "start": 40,
      "end": 81
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
            "name": "species",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 93
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 113
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 120
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "species",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 128
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 128
            },
            "optional": false,
            "computed": true,
            "start": 96,
            "end": 129
          },
          "definite": false,
          "start": 86,
          "end": 129
        }
      ],
      "declare": false,
      "start": 82,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
