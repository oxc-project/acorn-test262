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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 44,
                "end": 53,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 47,
                  "end": 53,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 50,
                    "end": 53,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 59,
                "end": 94,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 66,
                  "end": 94,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
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
