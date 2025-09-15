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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17,
                    "end": 23
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 24,
                    "end": 32
                  },
                  "optional": false,
                  "computed": false,
                  "start": 17,
                  "end": 32
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 35,
                  "end": 36
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 16,
                "end": 36
              }
            ],
            "start": 10,
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 71,
                      "end": 73
                    },
                    "start": 69,
                    "end": 73
                  },
                  "start": 63,
                  "end": 73
                },
                "init": null,
                "definite": false,
                "start": 63,
                "end": 73
              }
            ],
            "declare": false,
            "start": 59,
            "end": 74
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              },
              "property": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 324
                },
                "property": {
                  "type": "Literal",
                  "value": "iterator",
                  "raw": "\"iterator\"",
                  "start": 325,
                  "end": 335
                },
                "optional": false,
                "computed": true,
                "start": 318,
                "end": 336
              },
              "optional": false,
              "computed": true,
              "start": 314,
              "end": 337
            },
            "directive": null,
            "start": 314,
            "end": 338
          }
        ],
        "start": 53,
        "end": 340
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 41,
      "end": 340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 340
}
```
