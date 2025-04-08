__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 22,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 14,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 13,
                  "end": 14,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 16,
                "end": 20,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 75,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 39,
        "end": 55,
        "callee": {
          "type": "MemberExpression",
          "start": 39,
          "end": 52,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "name": "values",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 72,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "name": "entries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 91,
            "end": 108,
            "callee": {
              "type": "MemberExpression",
              "start": 91,
              "end": 105,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 97,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 105,
                "name": "entries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
