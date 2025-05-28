__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 99,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 105,
                "end": 109,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 108,
                  "end": 109,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 115,
                "end": 125,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 118,
                  "end": 125,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 131,
                "end": 135,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 135,
                  "value": 8,
                  "raw": "8"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 263,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 262,
            "callee": {
              "type": "MemberExpression",
              "start": 249,
              "end": 260,
              "object": {
                "type": "MemberExpression",
                "start": 249,
                "end": 252,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 253,
                "end": 260,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 289,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 288,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 272,
            "end": 288,
            "callee": {
              "type": "MemberExpression",
              "start": 272,
              "end": 285,
              "object": {
                "type": "MemberExpression",
                "start": 272,
                "end": 275,
                "object": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 276,
                "end": 285,
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 286,
                "end": 287,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 348,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 344,
            "end": 347,
            "object": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
