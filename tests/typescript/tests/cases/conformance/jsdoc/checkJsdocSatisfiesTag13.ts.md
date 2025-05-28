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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 87,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 65,
                  "end": 85,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "CallExpression",
                    "start": 70,
                    "end": 85,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 70,
                      "end": 83,
                      "object": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 83,
                        "decorators": [],
                        "name": "toLowerCase",
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
                  "id": null,
                  "generator": false
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
      "start": 154,
      "end": 179,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 178,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 170,
                  "end": 176,
                  "value": "oops",
                  "raw": "\"oops\""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
