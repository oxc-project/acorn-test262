__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 117,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 114,
                "end": 118
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 127,
                  "end": 134
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 124,
                "end": 134
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "value": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 143,
                  "end": 144
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 144
              }
            ],
            "start": 108,
            "end": 183
          },
          "definite": false,
          "start": 52,
          "end": 184
        }
      ],
      "declare": false,
      "start": 46,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 260
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "optional": false,
                "computed": false,
                "start": 259,
                "end": 262
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 270
              },
              "optional": false,
              "computed": false,
              "start": 259,
              "end": 270
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 259,
            "end": 272
          },
          "definite": false,
          "start": 255,
          "end": 272
        }
      ],
      "declare": false,
      "start": 251,
      "end": 273
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "optional": false,
                "computed": false,
                "start": 282,
                "end": 285
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "substring",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 295
              },
              "optional": false,
              "computed": false,
              "start": 282,
              "end": 295
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 296,
                "end": 297
              }
            ],
            "optional": false,
            "start": 282,
            "end": 298
          },
          "definite": false,
          "start": 278,
          "end": 298
        }
      ],
      "declare": false,
      "start": 274,
      "end": 299
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 351
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "optional": false,
            "computed": false,
            "start": 354,
            "end": 357
          },
          "definite": false,
          "start": 350,
          "end": 357
        }
      ],
      "declare": false,
      "start": 346,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 358
}
```
