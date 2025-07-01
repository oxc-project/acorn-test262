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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 15,
          "end": 25
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 15,
        "end": 27
      },
      "directive": null,
      "start": 15,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonExist",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 29,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 29,
        "end": 41
      },
      "directive": null,
      "start": 29,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "destructuring",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 72
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "destructuring",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 72
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 72
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 74
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "definite": false,
          "start": 57,
          "end": 78
        }
      ],
      "declare": false,
      "start": 53,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 102
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 95,
                "end": 102
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 104
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "definite": false,
          "start": 93,
          "end": 108
        }
      ],
      "declare": false,
      "start": 89,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
