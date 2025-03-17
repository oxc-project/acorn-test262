__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 116,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 116,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 75,
        "end": 116,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 115,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 83,
              "end": 115,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 84,
                  "end": 102,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 86,
                      "end": 92,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 91,
                        "end": 92,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 94,
                      "end": 100,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 95,
                        "end": 100,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 98,
                          "end": 100,
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
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 104,
                  "end": 114,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 106,
                      "end": 112,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 109,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 111,
                        "end": 112,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
