__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 60,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 65,
                  "end": 85,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 70,
                    "end": 85,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 70,
                      "end": 83,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 83,
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 165,
            "end": 178,
            "properties": [
              {
                "type": "Property",
                "start": 167,
                "end": 176,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 170,
                  "end": 176,
                  "raw": "\"oops\"",
                  "value": "oops",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
