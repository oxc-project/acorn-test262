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
        "name": "Graphic",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 19,
        "end": 22
      },
      "expression": false,
      "start": 0,
      "end": 22
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 45
          },
          "optional": false,
          "computed": false,
          "start": 24,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Graphic",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 53
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 63
          },
          {
            "type": "Literal",
            "value": "instance",
            "raw": "\"instance\"",
            "start": 65,
            "end": 75
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 84
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ThisExpression",
                          "start": 110,
                          "end": 114
                        },
                        "start": 103,
                        "end": 115
                      }
                    ],
                    "start": 97,
                    "end": 119
                  },
                  "expression": false,
                  "start": 86,
                  "end": 119
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 81,
                "end": 119
              }
            ],
            "start": 77,
            "end": 121
          }
        ],
        "optional": false,
        "start": 24,
        "end": 122
      },
      "directive": null,
      "start": 24,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
