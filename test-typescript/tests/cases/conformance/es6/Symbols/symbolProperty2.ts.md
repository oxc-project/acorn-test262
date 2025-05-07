__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 26,
            "end": 96,
            "properties": [
              {
                "type": "Property",
                "start": 32,
                "end": 38,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 44,
                "end": 53,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 47,
                  "end": 53,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 50,
                    "end": 53,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 59,
                "end": 94,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 66,
                  "end": 94,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 69,
                    "end": 94,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 79,
                        "end": 88,
                        "argument": {
                          "type": "Literal",
                          "start": 86,
                          "end": 87,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
