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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 57
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 71
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 83
                      },
                      "optional": false,
                      "computed": false,
                      "start": 70,
                      "end": 83
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 70,
                    "end": 85
                  },
                  "id": null,
                  "generator": false,
                  "start": 65,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 62,
                "end": 85
              }
            ],
            "start": 60,
            "end": 87
          },
          "definite": false,
          "start": 55,
          "end": 87
        }
      ],
      "declare": false,
      "start": 49,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
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
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                },
                "value": {
                  "type": "Literal",
                  "value": "oops",
                  "raw": "\"oops\"",
                  "start": 170,
                  "end": 176
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 176
              }
            ],
            "start": 165,
            "end": 178
          },
          "definite": false,
          "start": 160,
          "end": 178
        }
      ],
      "declare": false,
      "start": 154,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 195
}
```
