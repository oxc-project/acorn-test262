__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 358,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 185,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 184,
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
            "start": 108,
            "end": 183,
            "properties": [
              {
                "type": "Property",
                "start": 114,
                "end": 118,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 118,
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
                "start": 124,
                "end": 134,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 134,
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
                "start": 140,
                "end": 144,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 143,
                  "end": 144,
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
      "start": 251,
      "end": 273,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 259,
            "end": 272,
            "callee": {
              "type": "MemberExpression",
              "start": 259,
              "end": 270,
              "object": {
                "type": "MemberExpression",
                "start": 259,
                "end": 262,
                "object": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
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
                "start": 263,
                "end": 270,
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
      "start": 274,
      "end": 299,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 282,
            "end": 298,
            "callee": {
              "type": "MemberExpression",
              "start": 282,
              "end": 295,
              "object": {
                "type": "MemberExpression",
                "start": 282,
                "end": 285,
                "object": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
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
                "start": 286,
                "end": 295,
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
                "start": 296,
                "end": 297,
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
      "start": 346,
      "end": 358,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 351,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 354,
            "end": 357,
            "object": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
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
